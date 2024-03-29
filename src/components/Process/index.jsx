import React from "react";

const Process = () => {
	return (
		<section
			className="process section-padding bg-img bg-repeat"
			style={{ backgroundImage: `url(/assets/img/dots.png)` }}
		>
			<div className="container">
				<div className="section-head text-center">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-8 col-sm-10">
							<h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
								How We Do It
							</h6>
							<h4 className="playfont wow flipInX" data-wow-delay=".5s">
								Work Process
							</h4>
						</div>
					</div>
				</div>
				<div className=" row">
					<div className="col-lg-3 col-md-6 coulmn wow fadeInUp" data-wow-delay=".3s">
						<div className="item">
							<div
								className="bg-img"
								style={{ backgroundImage: `url(/assets/img/process/01.jpg)` }}
							>
								<h3 className="numb custom-font">01</h3>
							</div>
							<div className="cont">
								<h6 className="mb-10">Conceptualization</h6>
								<p>Generate and refine ideas to form a clear concept.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 coulmn wow fadeInUp" data-wow-delay=".5s">
						<div className="item">
							<div
								className="bg-img"
								style={{ backgroundImage: `url(/assets/img/process/02.jpg)` }}
							>
								<h3 className="numb custom-font">02</h3>
							</div>
							<div className="cont">
								<h6 className="mb-10">Design Development</h6>
								<p>Create detailed plans and designs based on the concept.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 coulmn wow fadeInUp" data-wow-delay=".4s">
						<div className="item">
							<div
								className="bg-img"
								style={{ backgroundImage: `url(/assets/img/process/03.jpg)` }}
							>
								<h3 className="numb custom-font">03</h3>
							</div>
							<div className="cont">
								<h6 className="mb-10">Implementation</h6>
								<p>Carry out the plans and bring the design to life.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
						<div className="item">
							<div
								className="bg-img"
								style={{ backgroundImage: `url(/assets/img/process/04.jpg)` }}
							>
								<h3 className="numb custom-font">04</h3>
							</div>
							<div className="cont">
								<h6 className="mb-10">Evaluation</h6>
								<p>Assess the project success and identify areas for improvement.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
