/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import LightLayout from "../../../layouts/light";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/Project-Intro";
import NextProject from "../../../components/Next-Project";
import AfterBefore from "../../../components/After-Before";
import Services3 from "../../../components/Services3";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const ProjectDetails = () => {
	const router = useRouter();
	const [data, setData] = useState({});
	const { item } = router.query;

	useEffect(() => {
		// write function to get the data from the firebase of the collection with id of item
		async function getProjectData() {
			try {
				const docRef = doc(db, "projects", item);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setData(docSnap.data());
					// console.log("Document data:", docSnap.data());
				} else {
					// console.log("No such document!");
				}
			} catch (error) {
				console.error("Error getting document:", error);
			}
		}

		if (item) {
			getProjectData();
		}
	}, [item]);

	return (
		<LightLayout>
			{data ? (
				<>
					<PageHeader
						title={data.name}
						fullPath={[
							{ id: 2, name: "Works", url: "/work1" },
							{ id: 3, name: "Work details", url: "/project-details" },
						]}
						image={data.thumbnail} // Get the Demo data => Thumbnail
					/>
					<ProjectIntro project={data} />
					<AfterBefore afterImage={data.afterImage} beforeImage={data.beforeImage} />
					<section className="projdtal" style={{ padding: "20px" }}>
						<div className="justified-gallery">
							<div className="row">
								{data.images?.map((image, index) => (
									<a key={index} href="#" className="col-lg-4 col-xl-3 col-md-12">
										<img
											alt={index}
											src={image}
											style={{ objectFit: "contain", height: "200px" }}
										/>
									</a>
								))}
							</div>
						</div>
					</section>

					<Services3 />
				</>
			) : null}

			{/* <NextProject /> */}
		</LightLayout>
	);
};

export default ProjectDetails;
