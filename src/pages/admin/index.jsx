import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../firebase/auth";
import Link from "next/link";
import LoadingScreen from "../../components/Loading-Screen/loading-screen";
import Login from "../../layouts/DashboardLayout";

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
		// console.log("Hello");
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push("/admin/dashboard");
			// console.log("Great");
		} catch (error) {
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
			<section className="contact cont-map">
				<div className="container" style={{ top: "30px !important" }}>
					<div className="contact-form wow fadeInDown" data-wow-delay=".3s">
						<form
							id="contact-form"
							method="post"
							style={{ top: "0 !important", right: "-50px !important", width: "500px" }}
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="section-head">
								<h6>Log In</h6>
							</div>
							<div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
								<FcGoogle size={22} />
								<span
									className="font-medium text-black group-hover:text-white"
									onClick={signInWithGoogle}
								>
									Login with Google
								</span>
							</div>

							<div className="messages"></div>

							<div className="controls">
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Email"
										required
									/>
								</div>

								<div className="form-group">
									<input
										type="password"
										placeholder="Password"
										name="password"
										className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								{/* <button type="submit" className="btn-curve btn-color">
									<span>Login</span>
								</button> */}
								<button className="btn-curve btn-color" onClick={loginHandler}>
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			{/* <main className="flex lg:h-[100vh]">
				<div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
					<div className="p-8 w-[600px]">
						<h1 className="text-6xl font-semibold">Login</h1>
						<p className="mt-6 ml-1">
							Don't have an account ?{" "}
							<Link href="/register" className="underline hover:text-blue-400 cursor-pointer">
								Sign Up
							</Link>
						</p>

						

						<form onSubmit={(e) => e.preventDefault()}>
							<div className="mt-10 pl-1 flex flex-col">
								<label>Email</label>
								<input
									type="email"
									name="email"
									className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mt-10 pl-1 flex flex-col">
								<label>Password</label>
								
							</div>
							<button
								className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
								onClick={loginHandler}
							>
								Sign in
							</button>
						</form>
					</div>
				</div>
				<div
					className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
					style={{
						backgroundImage: "url('/login-banner.jpg')",
					}}
				></div>
			</main> */}
		</Login>
	);
};

export default LoginForm;
