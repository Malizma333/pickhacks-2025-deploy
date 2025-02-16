import { useState } from 'react';
import styles from '@/styles/Resume.module.css';

const ResumeSubmission = () => {
	const [resume, setResume] = useState<File | null>(null);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [fileStatus, setFileStatus] = useState('NO FILE UPLOADED');

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setResume(event.target.files[0]);
			setFileStatus("FILE UPLOADED")
		} else {
			setFileStatus("NO FILE UPLOADED")
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!resume || !firstName || !lastName || !email) {
			setMessage('Please fill in all fields.');
			return;
		}

		setLoading(true);

		// Create a FormData object to handle file uploads
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		formData.append('resume', resume);

		const response = await fetch('/api/submitResume', {
			method: 'POST',
			body: formData // Send FormData instead of JSON
		});

		setLoading(false);

		if (response.ok) {
			setMessage('Resume submitted successfully!');
			setFirstName('');
			setLastName('');
			setEmail('');
			setResume(null);
		} else {
			setMessage('Failed to submit resume.');
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Submit Your Resume</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input className={styles.input} type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
				</div>
				<div>
					<label htmlFor='lastName'>Last Name</label>
					<input className={styles.input} type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input className={styles.input} type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div>
					<label htmlFor="resume">Upload Resume</label>
					<div className={styles.uploadFile}>
						<label className={styles.customFileLabel}>
							<svg className={styles.customFileLabelIcon} fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
								<path d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5h2zM3 15v6h18v-6h-2v4H5v-4H3z" fill="currentColor" />
							</svg>
							<input className={styles.hiddenFileInput} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
						</label>
						{fileStatus && <label id="file-status">{fileStatus}</label>}
					</div>
				</div>
				<button className={styles.submit} type='submit' disabled={loading}>
					{loading ? 'Submitting...' : 'Submit Resume'}
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default ResumeSubmission;
