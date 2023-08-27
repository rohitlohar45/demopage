import React from "react";
import appData from "../../data/app.json";

const ContactWithCareer = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 map-box"></div>
				<div className="col-lg-6 form">
					<form id="contact-form" method="post">
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
								<input
									id="form_number"
									type="tel"
									name="number"
									pattern="[0-9]{5}-[0-9]{5}"
									placeholder="Number"
									required="required"
								/>
							</div>

							<div className="form-group">
								<select
									name="Apply For"
									id="form_label"
									style={{
										padding: "15px",
										background: "#f7f7f7",
										border: 0,
										width: "100%",
									}}
								>
									<option value="*">Apply For</option>
									<option value="Interior Designer">Interior Designer</option>
									<option value="CAD Designer">CAD Designer</option>
								</select>
							</div>

							<div className="form-group">
								<input type="file" id="myfile" name="myfile"></input>
							</div>

							<button type="submit" className="btn-curve btn-color">
								<span>Send Message</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactWithCareer;
