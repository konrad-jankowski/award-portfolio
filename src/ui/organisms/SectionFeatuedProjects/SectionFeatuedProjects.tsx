import React from "react";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";
import { Project } from "@/ui/molecules/Project/Project";
import { useTranslations } from "next-intl";

const projects = [
	{
		name: "Razer E-commerce",
		link: "/razer-store",
		category: "e-commerce",
		featuredImg: "/projects/razer-store/featured.png",
		responsibility: ["develop"],
		dateOfBuild: 2023,
	},
	{
		name: "Levarde",
		link: "/leavrde",
		category: "e-commerce",
		featuredImg: "/projects/levarde/featured.png",
		responsibility: ["develop", "design", "deploy"],
		dateOfBuild: 2023,
	},
];

export const SectionFeatuedProjects = () => {
	const t = useTranslations("Projects");

	return (
		<section className="section-projects h-fit w-full bg-colorBackground px-10 pb-10 lg:p-section">
			<SectionHeading title={t("heading")} />
			<div className="relative z-50 mt-14 grid grid-cols-1 gap-7 lg:mt-20 lg:grid-cols-2 lg:gap-14">
				{projects.map((project) => {
					return (
						<Project
							key={project.name}
							name={project.name}
							link={project.link}
							featuredImg={project.featuredImg}
							responsibility={project.responsibility}
							category={""}
							dateOfBuild={project.dateOfBuild}
						/>
					);
				})}
			</div>
		</section>
	);
};
