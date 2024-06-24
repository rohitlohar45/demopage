import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import LightLayout from "../../layouts/light";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast from "react-hot-toast";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  const handleFormSubmit = async (formData) => {
    try {
      const projectRef = await addDoc(collection(db, "queries"), formData);
      toast.success("Query submitted successfully");
    } catch (error) {
      toast.error("Query not submitted");
    }
  };
  return (
    <LightLayout>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="/assets/img/01.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap onSubmit={handleFormSubmit} />
      </section>
    </LightLayout>
  );
};

export default Contact;
