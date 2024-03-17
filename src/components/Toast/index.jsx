import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

function ProjectToast({ show, onClose, type, message }) {
	const [showToast, setShowToast] = useState(show);

	useEffect(() => {
		setShowToast(show);
		if (show) {
			const timer = setTimeout(() => {
				setShowToast(false);
				onClose();
			}, 5000); // Close toast after 5 seconds
			return () => clearTimeout(timer);
		}
	}, [show, onClose]);

	const handleToastClose = () => {
		setShowToast(false);
		onClose();
	};

	return (
		<Toast
			onClose={handleToastClose}
			show={showToast}
			delay={5000} // Adjusted delay for autohide
			autohide
			style={{
				position: "fixed",
				top: 20,
				right: 20,
				zIndex: 9999, // Ensure the toast appears above other content
			}}
		>
			<Toast.Header
				closeButton={false}
				className={type === "error" ? "bg-danger text-white" : "bg-success text-white"}
			>
				<strong className="me-auto">{type === "error" ? "Error" : "Success"}</strong>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>
	);
}

export default ProjectToast;
