import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";

export const SectionFeatuedProjects = () => {
	return (
		<section className="section-projects h-screen w-full bg-colorBackground p-section">
			<SectionHeading />
			<div className="mt-20 grid grid-cols-2">
				<div className=" rounded-3xl border-t border-colorText/50 text-colorText">
					<div className="my-8 ml-6 flex gap-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-corner-up-right"
						>
							<polyline points="15 14 20 9 15 4" />
							<path d="M4 20v-7a4 4 0 0 1 4-4h12" />
						</svg>
						<h4>My project</h4>
					</div>
					<div className="relative h-[26rem] w-full overflow-hidden rounded-3xl ">
						<Image src="/project.png" className="rounded-3xl object-cover" fill alt="project" />
					</div>
				</div>
			</div>
		</section>
	);
};
