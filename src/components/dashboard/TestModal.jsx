import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { ListGroup } from "react-bootstrap";
import ProjectForm from "./ProjectForm";
import TestForm from "./TestForm";

function TestModal({
  action = "Add",
  addProject,
  selectedTest = null,
  show,
  setShow,
}) {
  const [TestData, setTestData] = useState(selectedTest || {});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const imageFiles = Array.from(event.target.files);
    const updatedImages = selectedImages.concat(imageFiles);
    setSelectedImages(updatedImages);
  };

  useEffect(() => {
    if (selectedTest) {
      console.log(selectedTest);
      handleShow();
    }
  }, [selectedTest]);

  const handleImageDeselect = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleSave = () => {
    // Pass the formData to the addProject function
    addProject(TestData);
    setShow(false); // Close modal after saving
  };

  return (
    <>
      <Button className="custom-button" onClick={handleShow}>
        Add Testimonial
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal"
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>{action} Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TestForm setTestData={setTestData} initialData={selectedTest} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-success" onClick={handleSave}>
            {action == "Add" ? "Submit" : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestModal;
