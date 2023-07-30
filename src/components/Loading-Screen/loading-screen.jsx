import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import Typewriter from "typewriter-effect";

const LoadingScreen = () => {
	React.useEffect(() => {
		let bodyEl = document.querySelector("body");
		if (appData.showLoading) {
			loadingPace();
			if (bodyEl.classList.contains("hideX")) {
				bodyEl.classList.remove("hideX");
			}
		} else {
			bodyEl.classList.add("hideX");
		}
	});
	return (
		<>
			<div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
				<div id="preloader" className="App">
					<div
						className="loading-text"
						style={{
							display: "flex",
							alignItems: "end",
							marginTop: "-30px !important",
						}}
					>
						<img
							src="/assets/img/loading_logo.png"
							alt="logo"
							style={{
								width: "150px !important",
								height: "100px !important",
								marginBottom: "20px !important",
								marginRight: "10px !important",
							}}
							className="logo"
						/>
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString("Peace Interiors").pauseFor(1000).deleteAll().start();
							}}
						/>
					</div>
				</div>
			</div>
			{appData.showLoading ? (
				<Script id="pace" strategy="beforeInteractive" src="/assets/js/pace.min.js"></Script>
			) : (
				""
			)}
		</>
	);
};

export default LoadingScreen;
