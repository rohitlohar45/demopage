/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import LightLayout from "../../../layouts/light";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/Project-Intro";
import NextProject from "../../../components/Next-Project";
import AfterBefore from "../../../components/After-Before";
import Services3 from "../../../components/Services3";
import { useRouter } from "next/router";

const ProjectDetails = () => {
	const router = useRouter();

	const [data, setData] = useState({
		name: "Project Name",
		description:
			"Where Inspiration Meets Home: Welcome to our Residential Interior Design Showcase, where impeccable craftsmanship and innovative designs transform houses into personalized havens of style and comfort. Step inside and discover the art of living beautifully.",
	});
	const { slug, item } = router.query;

	useEffect(() => {
		console.log("slug", slug);
		console.log("item", item);
	}, [slug, item]);

	return (
		<LightLayout>
			<PageHeader
				title="Luxury Furniture" // Get the Demo data =>Name
				fullPath={[
					// { id: 1, name: "home", url: "/" },
					{ id: 2, name: "Works", url: "/work1" },
					{ id: 3, name: "Work details", url: "/project-details" },
				]}
				image="/assets/img/portfolio/project1/bg.jpg" // Get the Demo data => Thumbnail
			/>
			<ProjectIntro project={data} />
			<AfterBefore />
			<section className="projdtal">
				{" "}
				{/* Can implement mapping */}
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
			{/* <NextProject /> */}
		</LightLayout>
	);
};

export default ProjectDetails;
