import { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ImageInput = ({ label, value, onChange, disabled, inputRef, resetFileInput }) => {
	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				ref={inputRef}
				type="file"
				accept="image/*"
				disabled={disabled}
				onChange={(e) => onChange(e.target.files[0])}
			/>
			{value && (
				<>
					<img
						src={
							typeof value === "string" && value.includes("http")
								? value
								: URL?.createObjectURL(value)
						}
						alt={label}
						style={{ maxWidth: "100px", marginTop: "8px" }}
					/>
					<Button
						variant="danger"
						onClick={() => {
							onChange(null);
							resetFileInput(inputRef);
						}}
					>
						Deselect
					</Button>
				</>
			)}
		</Form.Group>
	);
};

const ProjectForm = ({ setProjectData, initialData }) => {
	const [formData, setFormData] = useState({
		category: "",
		thumbnail: null,
		name: "",
		intro: "",
		description: "",
		location: "",
		year: "",
		area: "",
		images: [],
		process: { step1: null, step2: null, step3: null },
		beforeImage: null,
		afterImage: null,
	});

	// Create refs for different file inputs
	const thumbnailInputRef = useRef(null);
	const beforeImageInputRef = useRef(null);
	const afterImageInputRef = useRef(null);

	useEffect(() => {
		if (initialData) {
			setFormData(initialData);
		}
	}, [initialData]);

	useEffect(() => {
		setProjectData(formData);
	}, [formData, setProjectData]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageUpload = (field, file) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: file,
		}));
	};

	const handleImagesUpload = (event) => {
		const imageFiles = Array.from(event.target.files);
		const updatedImages = formData.images.concat(imageFiles);
		setFormData((prevData) => ({
			...prevData,
			images: updatedImages,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setProjectData(formData);
	};

	const resetFileInput = (inputRef) => {
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row className="mb-3">
				<Col>
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" name="name" value={formData?.name} onChange={handleChange} />
				</Col>
				<Col>
					<Form.Label>Category</Form.Label>
					<select
						name="category"
						className="form-control"
						value={formData?.category}
						onChange={handleChange}
					>
						<option value="">Select Category</option>
						<option value="residential">Residential</option>
						<option value="commercial">Corporate and Commercial</option>
						<option value="healthcare">Healthcare</option>
						<option value="education">Education</option>
						<option value="government">Government</option>
					</select>
				</Col>
			</Row>

			{/* Description and Introduction */}
			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					as="textarea"
					name="description"
					value={formData?.description}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="intro">
				<Form.Label>Introduction</Form.Label>
				<Form.Control as="textarea" name="intro" value={formData?.intro} onChange={handleChange} />
			</Form.Group>

			{/* Images and Thumbnails */}
			<Row className="mb-3">
				<Col>
					<ImageInput
						label="Thumbnail"
						value={formData?.thumbnail}
						onChange={(file) => handleImageUpload("thumbnail", file)}
						inputRef={thumbnailInputRef}
						disabled={formData?.thumbnail}
						resetFileInput={resetFileInput}
					/>
				</Col>
			</Row>

			<Row className="mb-3 mt-3">
				<Col>
					<Form.Label>Location</Form.Label>
					<Form.Control
						type="text"
						name="location"
						value={formData?.location}
						onChange={handleChange}
					/>
				</Col>
				<Col>
					<Form.Label>Area</Form.Label>
					<Form.Control type="text" name="area" value={formData?.area} onChange={handleChange} />
				</Col>
				<Col>
					<Form.Label>Year</Form.Label>
					<Form.Control type="text" name="year" value={formData?.year} onChange={handleChange} />
				</Col>
			</Row>

			<Form.Group controlId="display-img">
				<Form.Label>Display Images</Form.Label>
				<Form.Control type="file" accept="image/*" multiple onChange={handleImagesUpload} />
			</Form.Group>

			{formData?.images.length > 0 && (
				<div>
					{formData?.images.map(
						(image, index) =>
							index % 3 === 0 && (
								<Row key={index} className="mb-3">
									{formData?.images.slice(index, index + 3).map((img, colIndex) => (
										<Col key={colIndex} md={4}>
											<img
												src={
													typeof img === "string" && img.includes("http")
														? img
														: URL.createObjectURL(img)
												}
												alt={`Image ${index + colIndex + 1}`}
												style={{ maxWidth: "100px", marginRight: "8px" }}
											/>
											<Button
												variant="danger"
												onClick={() => {
													const updatedImages = [...formData.images];
													updatedImages.splice(index + colIndex, 1);
													setFormData((prevData) => ({
														...prevData,
														images: updatedImages,
													}));
												}}
											>
												Remove
											</Button>
										</Col>
									))}
								</Row>
							)
					)}
				</div>
			)}

			<Row className="mb-3">
				<Col>
					<ImageInput
						label="Before Image"
						value={formData?.beforeImage}
						onChange={(file) => handleImageUpload("beforeImage", file)}
						inputRef={beforeImageInputRef}
						disabled={formData?.beforeImage}
						resetFileInput={resetFileInput}
					/>
				</Col>
				<Col>
					<ImageInput
						label="After Image"
						value={formData?.afterImage}
						onChange={(file) => handleImageUpload("afterImage", file)}
						inputRef={afterImageInputRef}
						disabled={formData?.afterImage}
						resetFileInput={resetFileInput}
					/>
				</Col>
			</Row>
		</Form>
	);
};

export default ProjectForm;
