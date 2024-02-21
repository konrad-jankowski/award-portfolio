"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const iDo = [
	{ title: "Web development", description: "" },
	{ title: "Wordpress development", description: "" },
	{ title: "Headless CMS", description: "" },
	{ title: "Coding figma layouts", description: "" },
];

export const SectionAbout = () => {
	return (
		<section className="h-fit w-full bg-colorBackground px-10 pb-20 text-colorText lg:px-28">
			<SectionHeading title="Services" />
			<div className="relative z-50 mt-20 flex flex-col justify-between gap-6 font-secondary lg:flex-row lg:gap-0 ">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-4xl font-bold uppercase tracking-wide lg:text-7xl">
						What i do.
					</h3>
					<p className=" max-w-md text-lg lg:text-2xl">
						I focus on a web development and services related to it like design animations and much
						more.
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-8 ">
					{iDo.map((item) => {
						return (
							<div
								key={item.title}
								className="box flex w-full cursor-pointer items-center justify-between border-b border-colorText/50 pb-4 text-2xl font-bold lg:text-5xl"
							>
								<h4>{item.title}</h4>
								<div className="font-light">+</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
