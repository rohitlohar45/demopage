import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { db, projectStorage } from "../../firebase/firebase";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ContactWithCareer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		number: "",
		applyFor: "",
		file: null,
	});

	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		number: "",
		applyFor: "",
		file: "",
	});

	const [spamMessage, setSpamMessage] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		setFormData({
			...formData,
			file: e.target.files[0],
		});
	};

	const validateForm = () => {
		let valid = true;
		const errors = {};

		if (!formData.name.trim()) {
			errors.name = "Name is required";
			valid = false;
		}

		if (!formData.email.trim()) {
			errors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Email is invalid";
			valid = false;
		}

		if (!formData.number.trim()) {
			errors.number = "Number is required";
			valid = false;
		} else if (!/^\d{10}$/.test(formData.number)) {
			errors.number = "Number is invalid";
			valid = false;
		}

		if (!formData.applyFor.trim()) {
			errors.applyFor = "Apply For is required";
			valid = false;
		}

		if (!formData.file) {
			errors.file = "File is required";
			valid = false;
		}

		setFormErrors(errors);
		return valid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (spamMessage) {
			toast.error("Can't submit form. Please try again later.");
			return;
		}

		const isValid = validateForm();
		if (!isValid) {
			return;
		}

		try {
			setIsSubmitting(true);
			await uploadAndSetURL("file", formData);
			const projectRef = await addDoc(collection(db, "applications"), formData);
			toast.success("Application Submitted Successfully");
			setFormData({
				name: "",
				email: "",
				number: "",
				applyFor: "",
				file: null,
			});
			setIsSubmitting(false);
		} catch (error) {
			console.error("Error submitting form: ", error);
			alert("An error occurred while submitting the form. Please try again later.");
			setIsSubmitting(false);
		}
	};

	const uploadAndSetURL = async (imageField, formData) => {
		if (formData[imageField]) {
			const storageRef = ref(projectStorage, `Resume/${formData.name}`);
			const uploadTask = uploadBytesResumable(storageRef, formData[imageField]);
			await uploadTask;
			formData[imageField] = await getDownloadURL(storageRef);
		}
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 map-box">
					<iframe src="https://lottie.host/embed/f355a0da-8ae7-4fa0-90f5-10e8248b113c/8LjVEzVvTg.json"></iframe>
				</div>
				<div className="col-lg-6 form">
					<form id="contact-form" onSubmit={handleSubmit}>
						<div className="text-center" style={{ marginBottom: "20px" }}>
							<h2 className="text-center" style={{ marginBottom: "10px" }}>
								Apply Now
							</h2>
							<p className="text-center" style={{ marginBottom: "10px" }}>
								We are always looking for talented individuals to join our team. If you are
								passionate about design and architecture, we would love to hear from you. Please
								fill out the form below and attach your resume.
							</p>
						</div>

						<div className="controls">
							<div className="form-group">
								<input
									id="form_name"
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Name"
									required
								/>
								{formErrors.name && <p className="text-danger">{formErrors.name}</p>}
							</div>

							<div className="form-group">
								<input
									id="form_email"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									required
								/>
								{formErrors.email && <p className="text-danger">{formErrors.email}</p>}
							</div>

							<div className="form-group">
								<input
									id="form_number"
									type="tel"
									name="number"
									value={formData.number}
									onChange={handleChange}
									placeholder="Number"
									required
								/>
								{formErrors.number && <p className="text-danger">{formErrors.number}</p>}
							</div>

							<div className="form-group">
								<select
									name="applyFor"
									id="form_label"
									value={formData.applyFor}
									onChange={handleChange}
									style={{
										padding: "15px",
										background: "#f7f7f7",
										border: 0,
										width: "100%",
									}}
									required
								>
									<option value="">Apply For</option>
									<option value="Interior Designer">Interior Designer</option>
									<option value="CAD Designer">CAD Designer</option>
								</select>
								{formErrors.applyFor && <p className="text-danger">{formErrors.applyFor}</p>}
							</div>

							<div className="form-group">
								<input type="file" id="myfile" name="myfile" onChange={handleFileChange} required />
								{formErrors.file && <p className="text-danger">{formErrors.file}</p>}
							</div>

							<div className="text-center">
								<button type="submit" className="btn-curve btn-color" disabled={isSubmitting}>
									{isSubmitting ? (
										<>
											<span
												className="spinner-border spinner-border-sm"
												role="status"
												aria-hidden="true"
											></span>
											<span className="visually-hidden">Loading...</span>
										</>
									) : (
										<span>Send Message</span>
									)}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactWithCareer;
