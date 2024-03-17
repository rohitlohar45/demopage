/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ComingSoon from "../Coming-Soon";

export const WorkTwoColumn = ({ slug = "" }) => {
	useEffect(() => {
		setTimeout(() => {
			if (window.Isotope) initIsotope();
		}, 1000);
	}, []);

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function fetchProjects() {
			const q = query(collection(db, "projects"), where("category", "==", slug));

			const querySnapshot = await getDocs(q);
			console.log("querySnapshot", querySnapshot);
			let data = [];
			querySnapshot.forEach((project) => {
				console.log(project.data());
				data.push({ ...project.data(), id: project.id });
			});
			// filter the data based on the category
			// const data = await getDocs(q);
			// console.log("data", data);
			setProjects(data.filter((project) => project.category === slug));
			console.log("data", data);

			setProjects(data);
		}
		fetchProjects();
	}, [slug]);

	return (
		<>
			{projects.length < 2 ? (
				<ComingSoon category={slug} />
			) : (
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
												<img src={project.thumbnail} alt="" />
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
						</div>
					</div>
				</section>
			)}
		</>
	);
};
