import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const TestForm = ({ setTestData, initialData }) => {
	const [formData, setFormData] = useState({
		category: "",
		name: "",
		description: "",
	});

	useEffect(() => {
		if (initialData) {
			setFormData(initialData);
		}
	}, [initialData]);

	useEffect(() => {
		setTestData(formData);
	}, [formData]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	//   const handleImageUpload = (field, file) => {
	//     setFormData((prevData) => ({ ...prevData, [field]: file }));
	//   };

	//   const handleImagesUpload = (event) => {
	//     const imageFiles = Array.from(event.target.files);
	//     const updatedImages = formData?.images.concat(imageFiles);
	//     setFormData((prevData) => ({ ...prevData, images: updatedImages }));
	//   };

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(formData + "TestForm");
		setTestData(formData);
	};

	return (
		<Form onSubmit={handleSubmit}>
			{/* Form fields */}
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
						<option value="customer">Customer</option>
					</select>
				</Col>
			</Row>
			<Form.Group controlId="description">
				<Form.Label>Description</Form.Label>
				<Form.Control
					as="textarea"
					name="description"
					value={formData?.description}
					onChange={handleChange}
				/>
			</Form.Group>
			{/* <Form.Group controlId="intro">
        <Form.Label>Introduction</Form.Label>
        <Form.Control
          as="textarea"
          name="intro"
          value={formData?.intro}
          onChange={handleChange}
        />
      </Form.Group> */}
			{/* <Row>
        <Col>
          <ImageInput
            label="Thumbnail"
            value={formData?.thumbnail}
            onChange={(file) => handleImageUpload("thumbnail", file)}
            disabled={!!initialData}
          />
        </Col>
      </Row> */}
			{/* <Row className="mb-3 mt-3">
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
          <Form.Control
            type="text"
            name="area"
            value={formData?.area}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            name="year"
            value={formData?.year}
            onChange={handleChange}
          />
        </Col>
      </Row> */}
			{/* Display Images */}
			{/* <Form.Group controlId="display-img">
        <Form.Label>Display Images</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            handleImagesUpload(e);
          }}
        />
      </Form.Group> */}
			{/* Display uploaded images */}
			{/* {formData?.images.length > 0 && !initialData && (
        <div>
          {formData?.images.map(
            (image, index) =>
              index % 3 === 0 && (
                <Row key={index} className="mb-3">
                  {formData?.images
                    .slice(index, index + 3)
                    .map((image, colIndex) => (
                      <Col key={colIndex}>
                        <img
                          src={
                            typeof image === "string" && image.includes("http")
                              ? null
                              : URL?.createObjectURL(image)
                          }
                          alt={`Image ${index + colIndex + 1}`}
                          style={{ maxWidth: "100px", marginRight: "8px" }}
                        />

                        <Button
                          variant="danger"
                          onClick={() => {
                            const updatedImages = [...formData?.images];
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
      )} */}

			{/* {initialData?.images && (
        <div>
          {initialData?.images.map(
            (image, index) =>
              index % 3 === 0 && (
                <Row key={index} className="mb-3">
                  {initialData?.images
                    .slice(index, index + 3)
                    .map((image, colIndex) => (
                      <Col key={colIndex}>
                        <img
                          src={image}
                          alt={`Image ${index + colIndex + 1}`}
                          style={{ maxWidth: "100px", marginRight: "8px" }}
                        />
                      </Col>
                    ))}
                </Row>
              )
          )}
        </div>
      )} */}

			{/* BEFORE and AFTER images */}
			{/* <Row className="mb-3">
        <Col>
          <ImageInput
            label="Before Image"
            value={formData?.beforeImage}
            onChange={(file) => handleImageUpload("beforeImage", file)}
            disabled={!!initialData}
          />
        </Col>
        <Col>
          <ImageInput
            label="After Image"
            value={formData?.afterImage}
            onChange={(file) => handleImageUpload("afterImage", file)}
            disabled={!!initialData}
          />
        </Col>
      </Row> */}
			{/* Step 1 Image */}
			{/* <Row className="mb-3">
        <Col>
          <ImageInput
            label="Sketch/Plan"
            value={formData?.process.step1}
            onChange={(file) => handleImageUpload("process.step1", file)}
            disabled={!!initialData}
          />
        </Col>
        <Col>
          <ImageInput
            label="Proposed Plan"
            value={formData?.process.step2}
            onChange={(file) => handleImageUpload("process.step2", file)}
            disabled={!!initialData}
          />
        </Col>
        <Col>
          <ImageInput
            label="3D Design"
            value={formData?.process.step3}
            onChange={(file) => handleImageUpload("process.step3", file)}
            disabled={!!initialData}
          />
        </Col>
      </Row> */}
		</Form>
	);
};

export default TestForm;
