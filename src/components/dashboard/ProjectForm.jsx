// ... (import statements and other code)
import React, { useState } from "react";
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import Dropdown from "react-bootstrap/Dropdown";

const ProjectForm = () => {
	const [selectedOption, setSelectedOption] = useState("Select an Option");

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	const [formData, setFormData] = useState({
		category: "",
		thumbnail: "",
		name: "",
		intro: "",
		description: "",
		location: "",
		year: "",
		area: "",
		images: [{ url: "", caption: "" }],

		process: {
			step1: { title: "", thumbnail: "", Description: "" },
			step2: { title: "", thumbnail: "", Description: "" },
			step3: { title: "", thumbnail: "", Description: "" },
		},
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [selectedImages, setSelectedImages] = useState([]);
	const [thumbnailImage, setThumbnailImage] = useState();
	const [beforeImage, setBeforeImage] = useState();
	const [afterImage, setAfterImage] = useState();
	const [step1Image, setStep1Images] = useState();
	const [step2Image, setStep2Images] = useState();
	const [step3Image, setStep3Images] = useState();

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

	const handleImageChange = (index, field, value) => {
		const updatedImages = [...formData.images];
		updatedImages[index][field] = value;
		setFormData((prevData) => ({ ...prevData, images: updatedImages }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData); // Send this data to your backend or handle as needed
	};

	const handleStepThumbnailUpload = (step, thumbnailFile) => {
		// Handle image upload for step thumbnail
		// You can implement your image upload logic here
		// After successful upload, set the thumbnail URL in the form data
	};

	return (
		<Form onSubmit={handleSubmit}>
			{/* Name and Category */}
			<Row className="mb-3">
				<Form.Group as={Col}>
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>Category</Form.Label>
					<select
						name="Category"
						id="form_label"
						style={{
							padding: "0.375rem 0.75rem",
							border: "1px solid #ced4da",
							borderRadius: "0.25rem",
							width: "100%",
							fontSize: "1rem",
						}}
						onChange={handleChange}
					>
						<option value="*">Select Category</option>
						<option value="Residential">Residential</option>
						<option value="Corporate and Commercial">Corporate and Commercial</option>
						<option value="Healthcare">Healthcare</option>
						<option value="Education">Education</option>
						<option value="Government">Government</option>
					</select>
				</Form.Group>
			</Row>

			{/* Description */}
			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					as="textarea"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>
			</Form.Group>
			{/* Intro */}
			<Form.Group controlId="intro">
				<Form.Label>Introduction</Form.Label>
				<Form.Control as="textarea" name="intro" value={formData.intro} onChange={handleChange} />
			</Form.Group>

			{/* Thumbnail */}
			<Row>
				<Col>
					<Form.Group controlId="thumbnail-img">
						<Form.Label>Thumbnail</Form.Label>
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setThumbnailImage(e.target.files)}
						/>
						{thumbnailImage && (
							<>
								<img
									src={URL.createObjectURL(thumbnailImage[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setThumbnailImage()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
				</Col>
			</Row>
			{/* Location, area,Year */}
			<Row className="mb-3 mt-3">
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Location</Form.Label>

					<Form.Control
						type="text"
						name="location"
						value={formData.location}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Area</Form.Label>
					<Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
				</Form.Group>
				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Year</Form.Label>
					<Form.Control type="text" name="year" value={formData.year} onChange={handleChange} />
				</Form.Group>
			</Row>
			{/* Budget and designer */}

			{/* display Images */}
			<Form.Group controlId="display-img">
				<Form.Label>Display Images (Multiple Selection)</Form.Label>
				<Form.Control type="file" accept="image/*" multiple onChange={handleImageUpload} />
			</Form.Group>
			{selectedImages.length > 0 && (
				<div>
					<h5>Selected Images:</h5>
					<ListGroup>
						{selectedImages.map((image, index) => (
							<ListGroup.Item key={index}>
								<img
									src={URL.createObjectURL(image)}
									alt={`Selected ${index + 1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => handleImageDeselect(index)}>
									Deselect
								</button>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			)}

			{/* AFTER and BEFORE  image */}
			<Row className="mb-3">
				<Col>
					<Form.Group controlId="before-img">
						<Form.Label>Before Image</Form.Label>
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setBeforeImage(e.target.files)}
						/>
						{beforeImage && (
							<>
								<img
									src={URL.createObjectURL(beforeImage[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setBeforeImage()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
				</Col>
				<Col>
					<Form.Group controlId="after-img">
						<Form.Label>After Image</Form.Label>
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setAfterImage(e.target.files)}
						/>
						{afterImage && (
							<>
								<img
									src={URL.createObjectURL(afterImage[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setAfterImage()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
				</Col>
			</Row>

			{/* Display Images */}

			{/* Process */}
			<Row>
				<Col>
					<Form.Group controlId="process-step1-title">
						<Form.Label>Sketch/Plan</Form.Label>
						{/* <Form.Control
              type="text"
              name="process.step1.title"
              value={formData.process.step1.title}
              onChange={handleChange}
            /> */}
					</Form.Group>

					<Form.Group controlId="process-step1-thumbnail">
						{/* <Form.Label>Step 1 Thumbnail</Form.Label> */}
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setStep1Images(e.target.files)}
						/>
						{step1Image && (
							<>
								<img
									src={URL.createObjectURL(step1Image[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setStep1Images()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
					{/* <Form.Group controlId="process-step1-description">
            <Form.Label>Step 1 Description</Form.Label>
            <Form.Control
              as="textarea"
              name="process.step1.description"
              value={formData.process.step1.Description}
              onChange={handleChange}
            />
          </Form.Group> */}
				</Col>

				<Col>
					<Form.Group controlId="process-step2-title">
						<Form.Label>Proposed Plan</Form.Label>
					</Form.Group>

					<Form.Group controlId="process-step2-thumbnail">
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setStep2Images(e.target.files)}
						/>
						{step2Image && (
							<>
								<img
									src={URL.createObjectURL(step2Image[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setStep2Images()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
				</Col>
				<Col>
					<Form.Group controlId="process-step3-title">
						<Form.Label>3D Design </Form.Label>
					</Form.Group>

					<Form.Group controlId="process-step3-thumbnail">
						<Form.Control
							type="file"
							accept="image/*"
							onChange={(e) => setStep3Images(e.target.files)}
						/>
						{step3Image && (
							<>
								<img
									src={URL.createObjectURL(step3Image[0])}
									alt={`Selected ${1}`}
									style={{ maxWidth: "100px", marginRight: "8px" }}
								/>
								<button className="btn btn-danger" onClick={() => setStep3Images()}>
									Deselect
								</button>
							</>
						)}
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
};

export default ProjectForm;
