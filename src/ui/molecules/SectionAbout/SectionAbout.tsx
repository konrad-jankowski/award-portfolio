"use client";

import { gsap } from "gsap";
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

type SectionAboutProps = {
	heading: string;
	whatIdo: string;
	whatIdoDescription: string;
};

export const SectionAbout = ({ heading, whatIdo, whatIdoDescription }: SectionAboutProps) => {
	return (
		<section className="h-fit w-full bg-colorBackground px-10 pb-20 text-colorText lg:px-28">
			<SectionHeading title={heading} />
			<div className="relative z-50 mt-20 flex flex-col justify-between gap-6 font-secondary lg:flex-row lg:gap-0 ">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-4xl font-bold uppercase tracking-wide lg:text-7xl">
						{whatIdo}.
					</h3>
					<p className=" max-w-md text-lg lg:text-2xl">{whatIdoDescription}.</p>
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
