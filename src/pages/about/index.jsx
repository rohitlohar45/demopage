// import React from "react";
// import MainLayout from "../../layouts/main";
// import PageHeader from "../../components/Page-header";
// import AboutUs4 from "../../components/About-Us4";
// import Services3 from "../../components/Services3";
// import Skills2 from "../../components/Skills2";
// import Testimonials1 from "../../components/Testimonials1";
// import Team2 from "../../components/Team2";

// const About = () => {
//   React.useEffect(() => {
//     document.querySelector("body").classList.add("index3");
//   }, []);

//   return (
//     <MainLayout>
//       <PageHeader
//         title="About Us"
//         fullPath={[
//           { id: 1, name: "home", url: "/" },
//           { id: 2, name: "about us", url: "/about" },
//         ]}
//       />
//       <AboutUs4 />
//       <Services3 bigTitle grid />
//       <Testimonials1 bigTitle />
//       <Team2 />
//       <Skills2 />
//     </MainLayout>
//   );
// };

// export default About;


import React from "react";
import PageHeader from "../../components/Page-header";
import AboutUs from "../../components/About-Us4";
import Services from "../../components/Services3";
import Skills from "../../components/Skills2";
import Testimonials from "../../components/Testimonials1";
import Team from "../../components/Team1";
import LightLayout from "../../layouts/light";
import Timeline from "../../components/Timeline";

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
			<Timeline events={[]} />
			<Skills />
		</LightLayout>
	);
};

export default About;