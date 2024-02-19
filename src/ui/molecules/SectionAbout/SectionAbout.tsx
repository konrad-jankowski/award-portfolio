"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const SectionAbout = () => {
	return (
		<section className=" h-fit w-full bg-colorBackground px-28 pb-20  text-colorText">
			<SectionHeading title="Services" />
			<div className="mt-20 flex justify-between font-secondary ">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-7xl font-bold uppercase tracking-wide">What i do.</h3>
					<p className=" max-w-md text-2xl">
						I focus on a web development and services related to it like design animations and much
						more.
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-8 ">
					<div className="box flex w-full cursor-pointer items-center justify-between border-b border-colorText/50 pb-4 text-5xl font-bold">
						<h4>Web development </h4>
						<div className="font-light">+</div>
					</div>
					<div className="box flex w-full cursor-pointer items-center justify-between border-b border-colorText/50 pb-4 text-5xl font-bold">
						<h4>Wordpress development </h4>
						<div className="font-light">+</div>
					</div>
					<div className="box flex w-full cursor-pointer items-center justify-between border-b border-colorText/50 pb-4 text-5xl font-bold">
						<h4>Headless CMS </h4>
						<div className="font-light">+</div>
					</div>
				</div>
			</div>

			{/* <div className="mt-20 flex justify-between gap-10 font-secondary">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-5xl font-medium">my stack.</h3>
					<p className=" max-w-sm text-xl">
						This is my stack i used the most in my project based on requirements and projects
						needes. I am also trying to expand and learn new thinks every day.
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-8">
					<h4 className="text-6xl font-bold">Javascript</h4>
					<h4 className="text-6xl font-bold">React</h4>
					<h4 className="text-6xl font-bold">Next js</h4>
					<h4 className="text-6xl font-bold">Strapi</h4>
					<h4 className="text-6xl font-bold">Wordpress</h4>
				</div>
			</div> */}
		</section>
	);
};
