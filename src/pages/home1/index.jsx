/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs1 from "../../components/Blogs1";
import Contact from "../../components/Contact";
import AboutUs5 from "../../components/About-Us5";
import Services5 from "../../components/Services5";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import Testimonials1 from "../../components/Testimonials1";
import Video from "../../components/Video";
import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";

const Home1 = () => {
	React.useEffect(() => {
		document.querySelector("body").classList.add("homepage");
	}, []);
	return (
		<LightLayout footerClass={"mt-30"}>
			<IntroWithHorizontal />
			<AboutUs1 />
			<Services1 />
			<Portfolio1 />
			<SkillsCircle />
			<Testimonials />
			<Team1 />
			{/* <Blogs1 /> */}
		</LightLayout>
	);
};

export default Home1;
