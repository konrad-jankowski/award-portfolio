"use client";

import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";
import { SectionScroll } from "@/ui/molecules/SectionScroll/SectionScroll";
import { SectionTest } from "@/ui/molecules/SectionTest/SectionTest";
import { SectionContact } from "@/ui/organisms/SectionContact/SectionContact";
import { SectionFeatuedProjects } from "@/ui/organisms/SectionFeatuedProjects/SectionFeatuedProjects";

export default function Home() {
	return (
		<main className="">
			<SectionHero />
			{/* <SectionTest /> */}
			<SectionScroll />
			<SectionAbout />
			<SectionFeatuedProjects />
			<SectionContact />
		</main>
	);
}
