/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <PageHeader
        // title={{
        //   first: "Architecture is a visual art,",
        //   second: "and the building speak for themeselves",
        // }}
        title="Architecture is a visual art"
        fullPath={
          [
            // { id: 1, name: "home", url: "/" },
            // { id: 2, name: "Projects", url: "/blogs" },
          ]
        }
        image="/assets/img/patern.png"
        // title = "text",
        content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      />
      <WorkTwoColumn />
    </LightLayout>
  );
};

export default Work1;
