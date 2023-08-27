import React from "react";
import PageHeader from "../../components/Page-header";
import AboutUs from "../../components/About-Us2";
import Services from "../../components/Services3";
import Skills from "../../components/Skills2";
import Testimonials from "../../components/Testimonials1";
import Team from "../../components/Team1";
import LightLayout from "../../layouts/light";

const About = () => {
	React.useEffect(() => {
		document.querySelector("body").classList.add("index3");
	}, []);

	return (
		<LightLayout>
			<PageHeader
				title="About Us"
				fullPath={[
					{ id: 1, name: "home", url: "/" },
					{ id: 2, name: "about us", url: "/about" },
				]}
			/>
			<AboutUs />
			<Services />
			<Testimonials bigTitle />
			<Team />
			<Skills />
		</LightLayout>
	);
};

export default About;
