"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";

export const SectionScroll = () => {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-200vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			pin.kill();
		};
	}, []);

	useGSAP(() => {
		const titles = gsap.utils.toArray(".stack");
		const tl = gsap.timeline({ repeat: -1 });
		titles.forEach((title) => {
			const splitTitle = new SplitTextJS(title);
			tl.from(
				splitTitle.chars,
				{
					opacity: 0,
					y: 80,
					rotateX: -90,
					stagger: 0.03,
				},
				"<",
			).to(
				splitTitle.chars,
				{
					opacity: 0,
					y: -80,
					rotateX: 90,
				},
				"<1",
			);
		});
	}, []);

	return (
		<section className="scroll-section-outer overflow-hidden bg-colorBackground text-colorText">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="scroll-section-inner relative flex h-screen w-[300vw] flex-row "
				>
					<div className="scroll-section h-scroll flex w-screen flex-col items-center justify-center gap-8">
						<h3 className="text-3xl lg:text-7xl">I am a web developer</h3>
						<h3 className="max-w-[70%] text-center font-secondary text-2xl opacity-80 lg:text-6xl ">
							my mission is to help grow your biznes and make it visible online.
						</h3>
					</div>
					<div className="scroll-section h-scroll flex w-screen items-center justify-center gap-10 pb-20 ">
						<div>
							<Image
								className="object-contain "
								src="/projects/razer-store/razer.png"
								width={600}
								height={600}
								alt=""
							/>
						</div>
						<div className="max-w-lg ">
							<h3 className="font-secondary text-xl lg:text-3xl">
								I develop clean and modern web apps using the latest technologies. I pay attention
								for details and suit clients needs.
							</h3>
						</div>
					</div>
					<div className="scroll-section h-scroll flex w-screen items-center justify-center gap-10 pb-20 ">
						<div className="px-20 text-center">
							<p className="font-secondary text-4xl font-semibold lg:text-7xl">
								Mostly useded techstack by me:
							</p>
							<ul className="pt-28 text-center text-2xl font-semibold uppercase lg:text-5xl">
								<li className="stack leading-[0] tracking-wide">React/NextJs</li>
								<li className="stack leading-[0] tracking-wide">CSS/SASS/Tailwind</li>
								<li className="stack leading-[0] tracking-wide">Wordpress/Php</li>
								<li className="stack leading-[0] tracking-wide">Javascript/Typescript</li>
								<li className="stack leading-[0] tracking-wide">Strapi/Nodejs</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
