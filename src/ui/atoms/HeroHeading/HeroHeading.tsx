"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const HeroHeading = ({ hello, intro }: { hello: string; intro: string }) => {
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
		<div className=" relative z-50 flex flex-col items-center gap-4 text-center">
			<div className="text-container">
				<p
					className="animate-text inline-flex items-center gap-6 text-5xl font-bold tracking-wider text-colorText lg:text-9xl"
					style={{ opacity: 0 }}
				>
					<span className="h-6 w-6 rounded-full bg-colorText" /> {hello}
					<span className="h-6 w-6 rounded-full bg-colorText" />
				</p>
				<br />
				<p
					className="stroked animate-text inline-flex items-center gap-6 py-8 text-center text-5xl font-bold text-colorText lg:text-9xl"
					style={{ opacity: 0 }}
				>
					{intro}
				</p>
				<br />
				<p
					className="animate-text  inline-flex items-center gap-6 text-center text-4xl font-bold tracking-wider text-colorText lg:text-8xl"
					style={{ opacity: 0 }}
				>
					Konrad
				</p>
			</div>
		</div>
	);
};
