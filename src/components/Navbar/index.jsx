/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
	const handleDropdown = (e) => {
		getSiblings(e.target.parentElement)
			.filter((item) => item.classList.contains("show"))
			.map((item) => {
				item.classList.remove("show");
				if (item.childNodes[0]) {
					item.childNodes[0].setAttribute("aria-expanded", false);
				}
				if (item.childNodes[1]) {
					item.childNodes[1].classList.remove("show");
				}
			});
		e.target.parentElement.classList.toggle("show");
		e.target.setAttribute("aria-expanded", true);
		e.target.parentElement.childNodes[1].classList.toggle("show");
	};

	const handleMobileDropdown = (e) => {
		document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
	};

	return (
		<>
			<nav className="navbar change navbar-expand-lg" ref={navbarRef}>
				<div className="container">
					<Link href="#">
						<a className={`logo ${logoClass && logoClass}`}>
							<img src="/assets/img/logo.png" alt="logo" ref={logoRef} />
						</a>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						onClick={handleMobileDropdown}
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="icon-bar">
							<i className="fas fa-bars"></i>
						</span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item dropdown" onClick={handleDropdown}>
								<span
									className="nav-link dropdown-toggle"
									data-toggle="dropdown"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Home
								</span>
								<div className="dropdown-menu">
									<Link href="#">
										<a className="dropdown-item">Dropdown 1</a>
									</Link>
									<Link href="#">
										<a className="dropdown-item">Dropdown 2</a>
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link">About</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="#">
									<a className="nav-link">Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
