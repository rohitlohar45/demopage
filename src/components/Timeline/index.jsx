import React from "react";

const TimelineItem = ({ date, title, description }) => {
	return (
		<li className="timeline-item">
			<div className="timeline-badge">•</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4 className="timeline-title">{date}</h4>
				</div>
				<div className="timeline-body">
					<h5>{title}</h5>
					<p>{description}</p>
				</div>
			</div>
		</li>
	);
};

const Timeline = ({ events }) => {
	return (
		<section className="team section-padding">
			<div className="">
				<div className="container">
					<h2 className="pb-3 pt-2 border-bottom mb-5">Milestones in Our Journey</h2>
					{/* First section */}
					<div className="row align-items-center how-it-works d-flex">
						<div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
							<div className="circle font-weight-bold">2000</div>
						</div>
						<div className="col-6">
							<p>
								Complete interior designing of Satara collector office at Satara. The company not
								only did the drawings and planning for the project but also executed the whole
								project in record time and hence the office won the second prize in the Rajiv Gandhi
								best state government office in Satara.
							</p>
						</div>
					</div>
					{/* Path between 1-2 */}
					<div className="row timeline">
						<div className="col-2">
							<div className="corner top-right"></div>
						</div>
						<div className="col-8">
							<hr />
						</div>
						<div className="col-2">
							<div className="corner left-bottom"></div>
						</div>
					</div>
					{/* Second section */}
					<div className="row align-items-center justify-content-end how-it-works d-flex">
						<div className="col-6 text-right">
							<p>
								Completed all staff seating arrangement of various departments at council hall-
								Pune. Staff seating arrangement at Co-operative commissioners office at Central
								building Pune.
							</p>
						</div>
						<div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
							<div className="circle font-weight-bold">2001</div>
						</div>
					</div>
					{/* Path between 2-3 */}
					<div className="row timeline">
						<div className="col-2">
							<div className="corner right-bottom"></div>
						</div>
						<div className="col-8">
							<hr />
						</div>
						<div className="col-2">
							<div className="corner top-left"></div>
						</div>
					</div>
					{/* Third section */}
					<div className="row align-items-center how-it-works d-flex">
						<div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
							<div className="circle font-weight-bold">2003</div>
						</div>
						<div className="col-6">
							<p>
								Another feather in the crown, Citizen Facility center at collector office Dhule &
								also completed the complete meeting hall at Collector office Dhule. All the work was
								complete in given stipulated time conquering all odds. Also in the same year the
								complete staff seating arrangement at the Zilla Parishad Office Dhule was completed.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
