"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db, projectStorage } from "../../../firebase/firebase";
import { useAuth } from "../../../firebase/auth";

import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import DashboardLayout from "../../../layouts/DashboardLayout";
import ProjectToast from "../../../components/Toast";
import toast from "react-hot-toast";
import Dashboard_Test from "../../../components/dashboard/Dashboard_Test";

export default function ProfilePage() {
  const [tests, setTests] = useState([]);

  const { signOut, authUser, isLoading } = useAuth();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const fetchTests = async () => {
    const q = query(collection(db, "testimonials"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((test) => {
      console.log(test.data());
      data.push({ ...test.data(), id: test.id });
    });
    setTests(data);
  };

  useEffect(() => {
    fetchTests();
    console.log("Testimonials", tests);
  }, []);

  const handleCreateTestimonial = async (test) => {
    console.log("Creating testimonial", test);

    try {
      // const { images, beforeImage, afterImage, process } = test;
      // const uploadTasks = [];

      // Upload and set URL for each image field
      // const uploadAndSetURL = async (imageField) => {
      //   if (project[imageField]) {
      //     const storageRef = ref(
      //       projectStorage,
      //       `${project.name}/${imageField}`
      //     );
      //     const uploadTask = uploadBytesResumable(
      //       storageRef,
      //       project[imageField]
      //     );
      //     await uploadTask;
      //     project[imageField] = await getDownloadURL(storageRef);
      //   }
      // };

      // Upload images
      // const imageFields = [
      //   "beforeImage",
      //   "afterImage",
      //   "thumbnail",
      //   "process.step1",
      //   "process.step2",
      //   "process.step3",
      // ];
      // for (const field of imageFields) {
      //   await uploadAndSetURL(field);
      // }

      // Upload additional images
      // for (let i = 0; i < images.length; i++) {
      //   const storageRef = ref(projectStorage, `${project.name}/${i}`);
      //   const uploadTask = uploadBytesResumable(storageRef, images[i]);
      //   await uploadTask;
      //   const url = await getDownloadURL(storageRef);
      //   project.images[i] = url;
      //   uploadTasks.push(uploadTask);
      // }

      // Wait for all upload tasks to complete
      // await Promise.all(uploadTasks);

      // Add the project to the Firestore "testimonials" collection
      const testRef = await addDoc(collection(db, "testimonials"), test);
      toast.success("Project created successfully");
      console.log("Project created successfully with ID:", testRef.id);

      // Optionally, notify user or perform other actions after successful creation
      setTests([...tests, test]);

      // Clear input fields or reset form data
      // Example: setName(""), setDescription(""), setFile(null), etc.
    } catch (error) {
      toast.error("An error occurred while creating the project");
      console.error("An error occurred while creating the project", error);
    }
  };

  const handleEdit = async (test) => {
    console.log("Editing Testimonial", test);

    try {
      const { id } = test;

      // Update the project in the Firestore "testimonials" collection
      const testRef = doc(db, "testimonials", id);
      await setDoc(testRef, test, { merge: true });
      console.log("Testimonial edited successfully:", id);
      toast.success("Testimonial edited successfully");

      setTests((prevTests) => {
        const updatedTests = prevTests.map((p) =>
          p.id === test.id ? test : p
        );
        return updatedTests;
      });

      // Optionally, notify user or perform other actions after successful edit
    } catch (error) {
      toast.error("An error occurred while editing the project");
      console.error("An error occurred while editing the project", error);
    }
  };

  const handleDelete = async (test) => {
    try {
      const testRef = doc(db, "testimonials", test.id);
      await deleteDoc(testRef);

      // Remove the project from the local state
      const updatedTests = tests.filter((p) => p.id !== test.id);
      setTests(updatedTests);

      toast.success("Testimonial deleted successfully");
    } catch (error) {
      toast.error(
        "Error deleting testimonial! Please try again by refreshing the page"
      );
      console.error("Error deleting testimonial:", error);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleShowToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    setToastMessage("");
    setToastType("");
  };

  return (
    <DashboardLayout>
      <Dashboard_Test
        tests={tests}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddNewTest={handleCreateTestimonial}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        isDashboard={true}
        heading={"Testimonials"}
      />
      <ProjectToast
        show={showToast}
        onClose={handleCloseToast}
        type={toastType} // 'success' or 'error'
        message={toastMessage} // Message to display in the toast
      />
    </DashboardLayout>
  );
}
