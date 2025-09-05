import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb"; // MongoDB client
import { IncomingForm } from "formidable"; // Used to handle form-data (file uploads)
import fs from "fs";
import path from "path";
import { GridFSBucket } from "mongodb"; // Correct import for GridFSBucket

export const config = {
  api: {
    bodyParser: false, // Disables Next.js body parsing to handle the file manually
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(400).json({ error: "File parsing error" });
    }

    const { firstName, lastName, email } = fields;

    // Handle single or multiple files
    const resumeFile = Array.isArray(files?.resume)
      ? files?.resume[0]
      : files?.resume;

    if (!firstName || !lastName || !email || !resumeFile) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("resumes");
      const bucket = new GridFSBucket(db);

      // Fixing path usage directly from formidable's temporary file location
      const filePath = resumeFile.filepath; // Use the direct temp file path provided by formidable

      const uploadStream = bucket.openUploadStream(
        resumeFile.originalFilename,
        {
          contentType: resumeFile.mimetype,
        },
      );

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(uploadStream);

      uploadStream.on("finish", async () => {
        // After successful upload, save metadata in the collection
        const newResume = {
          firstName,
          lastName,
          email,
          resumeFileId: uploadStream.id, // Store the file ID
          submittedAt: new Date(),
        };

        const collection = db.collection("resumes");
        await collection.insertOne(newResume);

        // Ensure to return the response after all is done
        return res
          .status(201)
          .json({ message: "Resume submitted successfully!" });
      });

      uploadStream.on("error", (error: Error) => {
        // Type error parameter explicitly
        console.error("GridFS upload error:", error);
        return res.status(500).json({ error: "Error uploading file" });
      });
    } catch (error) {
      console.error("Error processing submission:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
}
