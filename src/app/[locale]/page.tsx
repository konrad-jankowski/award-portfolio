"use client";

import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionFeatuedProjects } from "@/ui/molecules/SectionFeatuedProjects/SectionFeatuedProjects";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";

export default function Home() {
	return (
		<main className="">
			<SectionHero />
			<SectionAbout />
			<SectionFeatuedProjects />
		</main>
	);
}
