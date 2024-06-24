// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const ImageGallery = ({ data }) => {
// 	const [show, setShow] = useState(false);
// 	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
// 	const [imageHeights, setImageHeights] = useState(Array(data.images.length).fill(null));

// 	const handleClose = () => setShow(false);
// 	const handleShow = (index) => {
// 		setSelectedImageIndex(index);
// 		setShow(true);
// 	};

// 	const handleSelect = (index) => {
// 		setSelectedImageIndex(index);
// 	};

// 	const handleImageLoad = (index, e) => {
// 		const newHeights = [...imageHeights];
// 		newHeights[index] = e.target.clientHeight;
// 		setImageHeights(newHeights);
// 	};

// 	const modalBodyStyle = {
// 		maxHeight: Math.max(...imageHeights),
// 		overflow: "hidden",
// 	};

// 	return (
// 		<section className="projdtal" style={{ padding: "20px" }}>
// 			<div className="justified-gallery">
// 				<div className="row">
// 					{data.images?.map((image, index) => (
// 						<div key={index} className="col-lg-4 col-xl-3 col-md-12">
// 							<img
// 								alt={index}
// 								src={image}
// 								style={{ objectFit: "contain", height: "200px", cursor: "pointer" }}
// 								onClick={() => handleShow(index)}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<Modal show={show} onHide={handleClose} size="lg">
// 				<Modal.Header closeButton />
// 				<Modal.Body style={modalBodyStyle}>
// 					<Carousel
// 						showThumbs={false}
// 						showStatus={false}
// 						selectedItem={selectedImageIndex}
// 						onSelect={handleSelect}
// 					>
// 						{data.images?.map((image, index) => (
// 							<div key={index}>
// 								<img
// 									src={image}
// 									alt={`Slide ${index}`}
// 									onLoad={(e) => handleImageLoad(index, e)}
// 									style={{ width: "100%", height: "auto" }}
// 								/>
// 							</div>
// 						))}
// 					</Carousel>
// 				</Modal.Body>
// 			</Modal>
// 		</section>
// 	);
// };

// export default ImageGallery;
