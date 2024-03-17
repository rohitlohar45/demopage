import React from "react";
import Link from "next/link";

const ProjectIntro = ({ project }) => {
	return (
		<section className="intro-section section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<div className="htit">
							<h4>{project?.name}</h4> {/* Get the Demo Data => Name*/}
						</div>
					</div>
					<div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
						<div className="text">
							<p>{project?.description}</p>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Location</h6>
							<p>{project?.location}</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Year</h6>
							{project?.year}
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Area(square footage)</h6>
							{project?.area}
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item mt-30">
							<h6>Category</h6>
							{project?.category?.toUpperCase()}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectIntro;
