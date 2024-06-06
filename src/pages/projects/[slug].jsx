// pages/work/[slug].js
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const WorkPage = () => {
	const router = useRouter();
	const { slug } = router.query;
	return (
		<LightLayout>
			<PageHeader
				title="Architecture is a visual art"
				fullPath={[]}
				image="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
			/>
			<WorkTwoColumn slug={slug} />
		</LightLayout>
	);
};

export default WorkPage;
