import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWith from "../../components/Contact-with-map";
import LightLayout from "../../layouts/light";
import ProcessCareer from "../../components/Process-Career";
import ContactWithCareer from "../../components/Career-Section";

const Contact = () => {
	React.useEffect(() => {
		document.querySelector("body").classList.add("index3");
	}, []);
	return (
		<LightLayout>
			<PageHeader
				title="Careers"
				fullPath={[
					{ id: 1, name: "home", url: "/" },
					{ id: 2, name: "careers", url: "/career" },
				]}
				image="/assets/img/01.jpg"
			/>
			<section className="contact">
				<ProcessCareer />
				<ContactWithCareer />
			</section>
		</LightLayout>
	);
};

export default Contact;
