"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SocialLinks } from "@/ui/atoms/SocialLinks";

const links = [
	{ name: "About", link: "#work" },
	{ name: "Portfolio", link: "#portfolio" },
	{ name: "Services", link: "#services" },
	{ name: "Contact", link: "#contact" },
];

export const Menu = () => {
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

			tl.from(".social-links", 0.4, {
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
		<div id="nav-container" className="bg-[#1c1f24] font-secondary text-[#e3e3e3]">
			<div className="nav">
				<div className="col flexx">
					<div className="nav-logo">c/</div>
					<div className="grid w-96 grid-cols-4 gap-4">
						<SocialLinks />
					</div>
					<h2 className="get-in mt-20 text-4xl font-medium lg:text-7xl">GET IN TOUCH</h2>
					<a className="get-in mx-auto mt-4 text-center font-medium">konr.jankowski@gmail.com</a>
				</div>
				<div className="col">
					{links.map((link) => {
						return (
							<div key={link.name} className="nav-link text-colorText hover:text-colorText/70">
								<a href={link.link}>{link.name}</a>
								<div className="duration-100 after:absolute after:left-0 after:top-[60px] after:m-[0_auto] after:h-16 after:w-[500px] after:bg-[#1c1f24] after:content-['']"></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
