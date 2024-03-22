// pages/work/[slug].js
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const WorkPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log("slug", slug);

    if (slug) {
      const content = getWorkContent(slug);

      if (content === null) {
        // Content not found, redirect to 404 page
        if (typeof window !== "undefined") {
          router.replace("/404"); // Redirect on the client side
        }
        // Return null to prevent rendering before redirection
        return null;
      }
    }
  }, [slug]);

  const getWorkContent = (slug) => {
    const workContent = {
      residential: "Content for Work 1",
      commercial: "Content for Work 2",
      healthcare: "Content for Work 2",
      education: "Content for Work 2",
      government: "Content for Work 2",
    };

    return workContent[slug] || null;
  };

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
