import React from "react";
import appData from "../../data/app.json";
import LightLayout from "../../layouts/light";

const Career = () => {
	return (
		<>
			<LightLayout>
				<section className="contact cont-map">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6 contact-form wow fadeInDown" data-wow-delay=".3s">
								<form id="contact-form" method="post" action="contact.php">
									<div className="section-head">
										<h6>Careers</h6>
										<h4 className="playfont">Join Us</h4>
									</div>

									<div className="messages"></div>

									<div className="controls">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="name"
												placeholder="Name"
												required="required"
											/>
										</div>

										<div className="form-group">
											<input
												id="form_email"
												type="email"
												name="email"
												placeholder="Email"
												required="required"
											/>
										</div>

										<div className="form-group">
											<textarea
												id="form_message"
												name="message"
												placeholder="Message"
												rows="4"
												required="required"
											></textarea>
										</div>

										<button type="submit" className="btn-curve btn-color">
											<span>Send Message</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="contact-map">
						<iframe src={appData.mapIframe}></iframe>
					</div>
					<div className="bg-img" style={{ backgroundImage: "url(/assets/img/2.jpg)" }}></div>
				</section>
			</LightLayout>
		</>
	);
};

export default Career;
