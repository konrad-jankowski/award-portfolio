"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const HeroHeading = ({
	hello,
	intro,
	intro2,
}: {
	hello: string;
	intro: string;
	intro2: string;
}) => {
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}

	useGSAP(() => {
		gsap.to(".animate-text", {
			duration: 1,
			opacity: 1,
			y: -20,
			stagger: 0.2,
			ease: "power2.out",
		});
	}, []);

	useGSAP(() => {
		gsap.to(".text-container", {
			opacity: 0,
			duration: 4,
			scrollTrigger: {
				trigger: ".text-container",
				start: "-100rem 10rem",
				end: "center",
				scrub: 1,
			},
		});
	}, {});

	return (
		<div className="text-container relative z-50 flex w-full flex-col items-center  justify-center lg:items-start ">
			<p
				className="animate-text inline-flex items-center text-6xl font-medium tracking-wider text-colorText lg:text-9xl"
				style={{ opacity: 0 }}
			>
				{hello}
			</p>
			<br />
			<p
				className="animate-text inline-flex items-center py-8  text-center text-6xl font-medium text-colorText lg:self-center lg:text-9xl"
				style={{ opacity: 0 }}
			>
				{intro}
			</p>
			<br />
			<p
				className="animate-text inline-flex items-center text-center text-6xl font-medium tracking-wider text-colorText lg:self-end lg:text-9xl"
				style={{ opacity: 0 }}
			>
				{intro2}
			</p>
		</div>
	);
};
