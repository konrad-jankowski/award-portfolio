import React from "react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";
import { Project } from "@/ui/molecules/Project/Project";

const projects = [
	{
		name: "Razer E-commerce",
		link: "https://razer-store-ten.vercel.app/",
		githubLink: "https://github.com/konrad-jankowski/razer-store.git",
		category: "e-commerce",
		featuredImg: "/projects/razer-store/featured.png",
		responsibility: ["develop"],
		dateOfBuild: 2023,
	},
	{
		name: "Levarde",
		link: "https://levarde.com/",
		category: "e-commerce",
		featuredImg: "/projects/levarde/featured.png",
		responsibility: ["develop", "design"],
		dateOfBuild: 2023,
		githubLink: "",
	},
	{
		name: "Fajne chatki",
		link: "https://cool-houses.vercel.app/",
		githubLink: "https://github.com/konrad-jankowski/cool-houses.git",
		category: "landing-page",
		featuredImg: "/projects/cool-houses/featured.png",
		responsibility: ["develop"],
		dateOfBuild: 2023,
	},
	{
		name: "Fox-dev",
		link: "https://fox-dev-eight.vercel.app/pl/blog",
		githubLink: "https://github.com/konrad-jankowski/FoxDev",
		category: "agency-website",
		featuredImg: "/projects/fox-dev/featured.png",
		responsibility: ["develop", "design"],
		dateOfBuild: 2024,
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
