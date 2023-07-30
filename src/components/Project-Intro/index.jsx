import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
	return (
		<section className="intro-section section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="htit">
							<h4>Name</h4> {/* Get the Demo Data => Name*/}
						</div>
					</div>
					<div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
						<div className="text">
							<p>
								{/* Get the Demo Data => Description */}
								Where Inspiration Meets Home: Welcome to our Residential Interior Design Showcase,
								where impeccable craftsmanship and innovative designs transform houses into
								personalized havens of style and comfort. Step inside and discover the art of living
								beautifully.
							</p>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Location</h6>
							<p>
								<Link href="#">.com</Link>
								{/*Get the Demo Data => Location */}
							</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Year</h6>
							<p>6 August 2022</p>
							{/*Get the Demo Data => Year */}
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Area(square footage)</h6>
							<p>
								<Link href="#">Web Design </Link>
								{/*Get the Demo Data => Area */}
							</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Category</h6>
							<p>
								<Link href="#">Residential</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectIntro;
