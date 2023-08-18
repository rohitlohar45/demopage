/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs from "../../components/About-Us2";
import Services from "../../components/Services2";
import Portfolio from "../../components/Portfolio2";
import Testimonials from "../../components/Testimonials1";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Layout from "../../layouts/light";

const Home = () => {
	React.useEffect(() => {
		document.querySelector("body").classList.add("homepage");
	}, []);
	return (
		<Layout>
			<IntroWithVertical />
			<Services />
			<AboutUs />
			<Portfolio />
			<Process />
			<Testimonials withBg />
		</Layout>
	);
};

export default Home;
