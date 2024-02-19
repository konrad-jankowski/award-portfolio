import React from "react";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";
import { Project } from "@/ui/molecules/Project/Project";

export const SectionFeatuedProjects = () => {
	return (
		<section className="section-projects h-fit w-full bg-colorBackground p-section pb-10">
			<SectionHeading title="Recent projects" />
			<div className="mt-20 grid grid-cols-2 gap-14">
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</section>
	);
};
