import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { ListGroup } from "react-bootstrap";
import ProjectForm from "./ProjectForm";

function ProjectModal({ action = "Add" }) {
	const [show, setShow] = useState(false);

	const [projectData, setProjectData] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [selectedImages, setSelectedImages] = useState([]);

	const handleImageUpload = (event) => {
		const imageFiles = Array.from(event.target.files);
		const updatedImages = selectedImages.concat(imageFiles);
		setSelectedImages(updatedImages);
	};

	const handleImageDeselect = (index) => {
		const updatedImages = [...selectedImages];
		updatedImages.splice(index, 1);
		setSelectedImages(updatedImages);
	};

	return (
		<>
			<Button className="custom-button" onClick={handleShow}>
				Add Project
			</Button>

			<Modal show={show} onHide={handleClose} dialogClassName="custom-modal" size="xl">
				<Modal.Header closeButton>
					<Modal.Title>{action} Project</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ProjectForm setProjectData={setProjectData} />
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-danger" onClick={handleClose}>
						Close
					</Button>
					<Button className="btn btn-success" onClick={handleClose}>
						{action == "Add" ? "Submit" : "Save Changes"}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ProjectModal;
