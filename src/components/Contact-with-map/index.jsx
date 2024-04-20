import React, { useState } from "react";
import appData from "../../data/app.json";

const ContactWithMap = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const validateForm = () => {
		let valid = true;
		const errors = {};

		// Validate name
		if (!formData.name.trim()) {
			errors.name = "Name is required";
			valid = false;
		}

		// Validate email
		if (!formData.email.trim()) {
			errors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Invalid email address";
			valid = false;
		}

		// Validate message
		if (!formData.message.trim()) {
			errors.message = "Message is required";
			valid = false;
		}

		setFormErrors(errors);
		return valid;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (validateForm()) {
			// console.log("Form submitted!");
			onSubmit(formData);

			setFormData({
				name: "",
				email: "",
				message: "",
			});
			setFormErrors({
				name: "",
				email: "",
				message: "",
			});
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 map-box">
					<iframe src={appData.mapIframe}></iframe>
				</div>
				<div className="col-lg-6 form">
					<form id="contact-form" onSubmit={handleSubmit} method="post">
						<div className="messages"></div>

						<div className="controls">
							<div className="form-group">
								<input
									id="form_name"
									type="text"
									name="name"
									placeholder="Name"
									required
									value={formData.name}
									onChange={handleChange}
								/>
								{formErrors.name && <div className="error">{formErrors.name}</div>}
							</div>

							<div className="form-group">
								<input
									id="form_email"
									type="email"
									name="email"
									placeholder="Email"
									required
									value={formData.email}
									onChange={handleChange}
								/>
								{formErrors.email && <div className="error">{formErrors.email}</div>}
							</div>

							<div className="form-group">
								<textarea
									id="form_message"
									name="message"
									placeholder="Message"
									rows="4"
									required
									value={formData.message}
									onChange={handleChange}
								></textarea>
								{formErrors.message && <div className="error">{formErrors.message}</div>}
							</div>

							<button type="submit" className="btn-curve btn-color">
								<span>Send Message</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactWithMap;
