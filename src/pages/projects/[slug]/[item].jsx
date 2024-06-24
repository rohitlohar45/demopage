import React, { useEffect, useState } from "react";
import LightLayout from "../../../layouts/light";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/Project-Intro";
import NextProject from "../../../components/Next-Project";
import AfterBefore from "../../../components/After-Before";
import Services3 from "../../../components/Services3";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Required for accessibility

const ProjectDetails = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const { item } = router.query;

  useEffect(() => {
    async function getProjectData() {
      try {
        const docRef = doc(db, "projects", item);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    }

    if (item) {
      getProjectData();
    }
  }, [item]);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
    document.body.classList.remove("modal-open");
  };

  return (
    <LightLayout>
      {data ? (
        <>
          <PageHeader title={data.name} image={data.thumbnail} />
          <ProjectIntro project={data} />
          <AfterBefore
            afterImage={data.afterImage}
            beforeImage={data.beforeImage}
          />
          <section className="projdtal" style={{ padding: "20px" }}>
            <div className="justified-gallery">
              <div className="row">
                {data.images?.map((image, index) => (
                  <a
                    key={index}
                    className="col-lg-4 col-xl-3 col-md-12"
                    onClick={() => openModal(image)}
                  >
                    <img
                      alt={index}
                      src={image}
                      style={{
                        objectFit: "contain",
                        height: "200px",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
          <Services3 />
        </>
      ) : null}

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            borderRadius: "5px",
            scrollbarWidth: "none",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "75%",
            maxHeight: "85%",
            padding: 0,
            border: "none",
            background: "transparent",
            zIndex: 1000,
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 1000,
          },
        }}
      >
        <div
          onClick={closeModal}
          style={{ cursor: "pointer", width: "100%", height: "100%" }}
        >
          <img      
            src={currentImage}
            style={{ width: "100%", height: "auto" }}
            alt="Popup"
          />
        </div>
      </Modal>
    </LightLayout>
  );
};

export default ProjectDetails;
