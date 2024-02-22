"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SocialLinks } from "@/ui/atoms/SocialLinks";

export const Menu = () => {
	const links = [
		{ name: "About", link: "#work" },
		{ name: "Portfolio", link: "#portfolio" },
		{ name: "Services", link: "#services" },
		{ name: "Contact", link: "#contact" },
	];

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

			// tl.to(
			// 	".logo",
			// 	0.2,
			// 	{
			// 		color: "red",
			// 	},
			// 	"-=0.1",
			// );

			tl.from(".social-links-wrapper > .social-links", 0.4, {
				opacity: 0,
				y: 20,
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
			<div className="col mb-14">
				{links.map((link) => {
					return (
						<div key={link.name} className="nav-link text-colorText hover:text-colorText/70">
							<a className="hover:opacity-60" href={link.link}>
								{link.name}
							</a>
							<div className="duration-100 after:absolute after:left-0 after:top-[60px] after:m-[0_auto] after:h-16 after:w-[500px] after:bg-[#1c1f24] after:content-['']"></div>
						</div>
					);
				})}
			</div>
			<div className="social-links-wrapper absolute bottom-20 mx-auto  grid w-full grid-cols-4 gap-3 px-6 lg:gap-4 lg:px-20">
				<SocialLinks />
			</div>
		</div>
	);
};
