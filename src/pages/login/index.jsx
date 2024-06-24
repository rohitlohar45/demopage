import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../firebase/auth";
import Login from "../../layouts/Login";
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
		}
	}, [authUser, isLoading]);

	const loginHandler = async () => {
		if (!email || !password) return;
		console.log("Hello");
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push("/admin/dashboard");
			toast.success("Login successful");
		} catch (error) {
			toast.error("Invalid credentials");
			console.error("An error occured", error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, Provider);
		} catch (error) {
			console.error("An error occured", error);
		}
	};

	return (
		<Login>
			<section className="contact cont-map flex justify-center items-center min-h-screen">
				<div
					style={{
						backgroundColor: "#fff",
						borderRadius: "8px",
						//padding: "30px",
						width: "100%",
						borderColor: "#333",
					}}
					className="contact-form wow fadeInDown"
					data-wow-delay=".3s"
				>
					<form id="contact-form" method="post" onSubmit={(e) => e.preventDefault()}>
						<div className="section-head text-center mb-6">
							<h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>Log In</h2>
						</div>
						<div
							style={{
								marginBottom: "20px",
								padding: "10px",
								backgroundColor: "#333",
								borderRadius: "6px",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								border: "none",
								outline: "none",
							}}
							onClick={signInWithGoogle}
						>
							<FcGoogle size={22} style={{ marginRight: "10px" }} />
							<span style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}>
								Login with Google
							</span>
						</div>
						<div className="messages"></div>
						<div className="controls">
							<div style={{ marginBottom: "20px" }}>
								<input
									type="email"
									name="email"
									style={{
										width: "100%",
										padding: "10px",
										borderRadius: "6px",
										border: "1px solid #ccc",
									}}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									required
								/>
							</div>
							<div style={{ marginBottom: "20px" }}>
								<input
									type="password"
									placeholder="Password"
									name="password"
									style={{
										width: "100%",
										padding: "10px",
										borderRadius: "6px",
										border: "1px solid #ccc",
									}}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div
								style={{
									marginBottom: "20px",
									padding: "10px",
									backgroundColor: "#fed0bb",
									borderRadius: "6px",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "100%",
									border: "none", // No border for a clean look
									outline: "none", // No outline for a smoother UI, but maintain focus states
								}}
								onClick={loginHandler}
								// disabled={loading}
							>
								<span
									style={{
										fontSize: "16px",
										fontWeight: "bold",
										color: "#333",
										textAlign: "center", // Correct alignment property for text
									}}
								>
									Login
								</span>
							</div>
						</div>
					</form>
				</div>
			</section>
		</Login>
	);
};

export default LoginForm;
