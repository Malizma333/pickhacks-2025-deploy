import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {};

console.log(process.env.MONGODB_URI); // Check if the URI is loaded correctly


if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

// Explicitly declare a type for the global object
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to avoid creating multiple MongoDB connections in development
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new connection
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
