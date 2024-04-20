/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import AfterBefore from "../../components/After-Before";
import Services3 from "../../components/Services3";
import { useRouter } from "next/router";

const ProjectDetails = () => {
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		// console.log("slug", slug);
	}, [slug]);

	return (
		<LightLayout>
			<PageHeader
				title="Luxury Furniture"
				fullPath={[
					{ id: 2, name: "Works", url: "/work1" },
					{ id: 3, name: "Work details", url: "/project-details" },
				]}
				image="/assets/img/portfolio/project1/bg.jpg"
			/>
			<ProjectIntro project={[{ name: "Project 1", description: "Demo" }]} />
			<AfterBefore />
			<section className="projdtal">
				<div className="justified-gallery">
					<div className="row">
						<a href="#" className="col-lg-4 col-xl-3 col-md-12">
							<img alt="" src="/assets/img/portfolio/project1/1.jpg" />
						</a>
						<a href="#" className="col-lg-4 col-xl-3 col-md-6">
							<img alt="" src="/assets/img/portfolio/project1/2.jpg" />
						</a>
						<a href="#" className="col-lg-4 col-xl-3 col-md-6">
							<img alt="" src="/assets/img/portfolio/project1/6.jpg" />
						</a>
						<a href="#" className="col-lg-4 col-xl-3 col-md-12">
							<img alt="" src="/assets/img/portfolio/project1/3.jpg" />
						</a>
					</div>
				</div>
			</section>

			<Services3 />
		</LightLayout>
	);
};

export default ProjectDetails;
