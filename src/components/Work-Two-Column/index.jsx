/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const demoprojects = [
	{
		id: 1,
		category: "611e29debe1a6f22d8fde4f1",
		name: "Cozy Living Room Makeover",
		description: "Transforming a dull living room into a cozy and inviting space.",
		images: [
			{
				url: "https://example.com/images/living_room1.jpg",
				caption: "Before the makeover",
			},
			{
				url: "https://example.com/images/living_room2.jpg",
				caption: "After the makeover",
			},
		],
		thumbnail: "https://example.com/images/living_room_thumb.jpg",
		budget: 2000,
		designer: "Emily Johnson",
		location: "New York, USA",
		area: "250 sq. ft",
		year: "2022",
		process: {
			step1: {
				title: "Consultation",
				thumbnail: "https://example.com/images/step1_thumb.jpg",
				Description: "Initial consultation with the client to understand their requirements.",
			},
			step2: {
				title: "Design and Planning",
				thumbnail: "https://example.com/images/step2_thumb.jpg",
				Description: "Creating a design plan with 3D renderings for the client's approval.",
			},
			step3: {
				title: "Execution",
				thumbnail: "https://example.com/images/step3_thumb.jpg",
				Description: "Implementing the approved design, furniture selection, and final touches.",
			},
		},
	},
	{
		id: 2,
		category: "611e29debe1a6f22d8fde4f2",
		name: "Modern Bedroom Redesign",
		description: "Modernizing a traditional bedroom with sleek and contemporary design elements.",
		images: [
			{
				url: "https://example.com/images/bedroom1.jpg",
				caption: "Before the redesign",
			},
			{
				url: "https://example.com/images/bedroom2.jpg",
				caption: "After the redesign",
			},
		],
		thumbnail: "https://example.com/images/bedroom_thumb.jpg",
		budget: 1500,
		designer: "Michael Smith",
		location: "Los Angeles, USA",
		area: "200 sq. ft",
		year: "2023",
		process: {
			step1: {
				title: "Conceptualization",
				thumbnail: "https://example.com/images/step1_bedroom_thumb.jpg",
				Description: "Brainstorming and conceptualizing the design plan.",
			},
			step2: {
				title: "Material Selection",
				thumbnail: "https://example.com/images/step2_bedroom_thumb.jpg",
				Description: "Selecting materials, colors, and furniture for the bedroom.",
			},
			step3: {
				title: "Implementation",
				thumbnail: "https://example.com/images/step3_bedroom_thumb.jpg",
				Description: "Executing the design and bringing the bedroom to life.",
			},
		},
	},
];

export const WorkTwoColumn = ({ slug = "" }) => {
	useEffect(() => {
		setTimeout(() => {
			if (window.Isotope) initIsotope();
		}, 1000);
	}, []);

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function fetchProjects() {
			// query to get all projects based on slug with the property category

			const q = query(collection(db, "projects"), where("category", "==", slug));

			const querySnapshot = await getDocs(q);

			let data = [];
			querySnapshot.forEach((project) => {
				console.log(project.data());
				data.push({ ...project.data(), id: project.id });
			});

			console.log(data);
		}
		fetchProjects();
		setProjects(demoprojects);
	}, []);

	return (
		<>
			<section className="works filter-img section-padding">
				<div className="container">
					<div className="row gallery">
						<div className="col-lg-6 items mt-0 interior theaters residential">
							<div className="section-head mb-0">
								<h3>Works</h3>
								<span>Our Recent Projects in {slug}</span>
							</div>
						</div>
						<div>
							{projects.map((project) => (
								<div key={project.id} className="col-lg-6 items interior my-5">
									<div className="item">
										<div className="img">
											<img src="/assets/img/works/1.jpg" alt="" />
										</div>
										<div className="cont vis">
											<h5>
												<Link href={`/projects/${slug}/${project.id}`}>{project.name}</Link>
											</h5>
											<span>{project.description}</span>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div> */}
					</div>
				</div>
			</section>
		</>
	);
};
