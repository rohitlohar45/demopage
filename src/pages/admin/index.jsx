import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../firebase/auth";
import Login from "../../layouts/DashboardLayout";
import toast from "react-hot-toast";

const Provider = new GoogleAuthProvider();

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const { authUser, isLoading } = useAuth();

	useEffect(() => {
		if (!isLoading && authUser) {
			router.push("/admin/dashboard");
		} else {
			router.push("/login");
		}
	}, [authUser, isLoading]);

	const loginHandler = async () => {
		if (!email || !password) return;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push("/admin/dashboard");
		} catch (error) {
			console.error("An error occured", error);
			toast.error("Invalid credentials");
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, Provider);
		} catch (error) {
			console.error("An error occured", error);
		}
	};

	return <></>;
};

export default LoginForm;
