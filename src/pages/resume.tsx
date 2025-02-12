import { useState } from "react";

const ResumeSubmission = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!resume || !firstName || !lastName || !email) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("resume", resume);

    const response = await fetch("/api/submitResume", {
      method: "POST",
      body: formData, // Send FormData instead of JSON
    });

    setLoading(false);

    if (response.ok) {
      setMessage("Resume submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setResume(null);
    } else {
      setMessage("Failed to submit resume.");
    }
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>Submit Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Resume"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResumeSubmission;
