/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";
import AfterBefore from "../../components/After-Before";
import Services3 from "../../components/Services3";

const ProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
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
      <ProjectIntro />
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
      <NextProject />
    </LightLayout>
  );
};

export default ProjectDetails;
