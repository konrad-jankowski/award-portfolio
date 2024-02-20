"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DarkModeSwitcher } from "@/ui/atoms/DarkModeSwitcher";

export const Navbar = () => {
	useGSAP(() => {
		const tl = gsap.timeline({ paused: true });

		function openNav() {
			animateOpenNav();
			const navBtn = document.getElementById("menu-toggle-btn");
			navBtn.onclick = function (e) {
				navBtn.classList.toggle("active");
				tl.reversed(!tl.reversed());
			};
		}

		openNav();

		function animateOpenNav() {
			tl.to("#nav-container", 0.2, {
				autoAlpha: 1,
				delay: 0.1,
			});

			tl.to(
				".site-logo",
				0.2,
				{
					color: "#fff",
				},
				"-=0.1",
			);

			tl.from(".flexx > div", 0.4, {
				opacity: 0,
				y: 10,
				stagger: {
					amount: 0.04,
				},
			});

			tl.to(
				".nav-link > a",
				0.8,
				{
					top: 0,
					ease: "power2.inOut",
					stagger: {
						amount: 0.1,
					},
				},
				"-=0.4",
			);

			tl.from(
				".nav-footer",
				0.3,
				{
					opacity: 0,
				},
				"-=0.5",
			).reverse();
		}
	}, []);

	return (
		<nav className="fixed left-0 right-0 top-0 z-50 flex h-28 w-full items-center justify-between  px-10 text-colorText">
			<div>Logo</div>
			<ul className="flex items-center gap-4">
				<li>
					<DarkModeSwitcher />
				</li>
				{/* <li className="flex flex-col items-center gap-2">
					<span>Work</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li>
				<li className="flex flex-col items-center gap-2">
					<span>Projects</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li>
				<li className="flex flex-col items-center gap-2">
					<span>Contact</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li> */}
				<div className="menu-toggle">
					<div id="menu-toggle-btn">
						<span className="test"></span>
					</div>
				</div>
			</ul>
			{
				/*  */
				<div id="nav-container" className="bg-colorText font-secondary text-colorBackground">
					<div className="nav">
						<div className="col flexx">
							<div className="nav-logo">c/</div>
							<div className="nav-socials">
								<a href="#">Behance</a>
								<a href="#">Twitter</a>
								<a href="#">Instagram</a>
								<a href="#">LinkedIn</a>
								<a href="#">Medium</a>
							</div>
						</div>
						<div className="col">
							<div className="nav-link">
								<a href="#">Work</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Services</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">About</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Manifesto</a>
								<div className="nav-item-wrapper"></div>
							</div>
							<div className="nav-link">
								<a href="#">Contact</a>
								<div className="nav-item-wrapper"></div>
							</div>
						</div>
					</div>
					<div className="nav-footer">
						<div className="links">
							<a href="#">Privacy policy</a>
							<a href="#">Cookie policy</a>
							<a href="#">Terms & Conditions</a>
						</div>
						<div className="contact">
							<a href="#">codegridweb@gmail.com</a>
						</div>
					</div>
				</div>
			}
			{/*  */}
		</nav>
	);
};
