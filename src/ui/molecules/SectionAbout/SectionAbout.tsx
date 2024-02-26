"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";

const iDo = [
	{
		title: "Web development",
		description:
			"I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
	},
	{
		title: "Wordpress development",
		description:
			"I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
	},
	{
		title: "Headless CMS",
		description:
			"I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
	},
	{
		title: "Coding figma layouts",
		description:
			"I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
	},
];

type SectionAboutProps = {
	heading: string;
	whatIdo: string;
	whatIdoDescription: string;
};

export const SectionAbout = ({ heading, whatIdo, whatIdoDescription }: SectionAboutProps) => {
	const [active, setActive] = useState(null);

	const handleClick = (index) => {
		setActive(active === index ? null : index);
	};

	return (
		<section className="h-fit w-full bg-colorBackground px-6 pb-20 text-colorText lg:px-28">
			<SectionHeading title={heading} />
			<div className="relative z-50 mt-14 flex flex-col justify-between gap-6 font-secondary lg:mt-20 lg:flex-row lg:gap-0 ">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-4xl font-bold uppercase tracking-wide lg:text-7xl">
						{whatIdo}.
					</h3>
					<p className=" max-w-md text-lg lg:text-2xl">{whatIdoDescription}</p>
				</div>
				<div className="flex flex-1 flex-col gap-8 ">
					{iDo.map((item, index) => {
						return (
							<div
								onClick={() => handleClick(index)}
								key={item.title}
								className={twMerge(
									"w-full cursor-pointer  border-b border-colorText/50 pb-4 text-2xl font-bold transition-all duration-500 lg:text-5xl",
									index === active && "rounded-md bg-colorText p-6 text-colorBackground",
								)}
							>
								<div className="flex w-full items-center justify-between">
									<h4>{item.title}</h4>
									<div
										className={`${active === index && "rotate-180 transition-transform duration-500"}`}
									>
										{index === active ? "-" : "+"}
									</div>
								</div>
								<p
									className={twMerge("mt-4 hidden text-lg", index === active && "block opacity-90")}
								>
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
