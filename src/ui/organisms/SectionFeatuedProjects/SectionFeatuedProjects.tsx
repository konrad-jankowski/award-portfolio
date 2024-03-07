import React from "react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";
import { Project } from "@/ui/molecules/Project/Project";
import { projects } from "@/projectsData";

export const SectionFeatuedProjects = () => {
	const t = useTranslations("Projects");

	return (
		<section
			id="projects"
			className="section-projects h-fit w-full bg-colorBackground px-6 pb-10 lg:p-section"
		>
			<SectionHeading title={t("heading")} />
			<div className="relative z-50 mt-14 grid grid-cols-1 gap-7 lg:mt-20 lg:grid-cols-2 lg:gap-14">
				{projects.map((project) => {
					return (
						<Project
							key={project.name}
							name={project.name}
							link={project.link}
							githubLink={project.githubLink}
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
