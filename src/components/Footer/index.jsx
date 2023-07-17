/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
	return (
		<footer className={`${classText ? classText : ""}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="item md-mb50">
							<div className="title">
								<h5>Contact Us</h5>
							</div>
							<ul>
								<li>
									<span className="icon pe-7s-map-marker"></span>
									<div className="cont">
										<h6>Officeal Address</h6>
										<p>ABC, Pune</p>
									</div>
								</li>
								<li>
									<span className="icon pe-7s-mail"></span>
									<div className="cont">
										<h6>Email Us</h6>
										<p>support@peaceinteriors.com</p>
									</div>
								</li>
								<li>
									<span className="icon pe-7s-call"></span>
									<div className="cont">
										<h6>Call Us</h6>
										<p>+123456789</p>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="item">
							<div className="logo">
								<img src="/assets/img/logo.png" alt="" />
							</div>
							<div className="social">
								<Link href="#">
									<a>
										<i className="fab fa-facebook-f"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-twitter"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-instagram"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-youtube"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
