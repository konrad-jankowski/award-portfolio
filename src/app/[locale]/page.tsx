"use client";

import { BackgroundCircle } from "@/ui/atoms/BackgroundCircle";
import { ContactButton } from "@/ui/atoms/ContactButton";
import { LanguageSwitcher } from "@/ui/atoms/LanguageSwitcher";
import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";
import { SectionScroll } from "@/ui/molecules/SectionScroll/SectionScroll";
import { SectionContact } from "@/ui/organisms/SectionContact/SectionContact";
import { SectionFeatuedProjects } from "@/ui/organisms/SectionFeatuedProjects/SectionFeatuedProjects";

export default function Home() {
	return (
		<main>
			<BackgroundCircle />
			<SectionHero />
			{/* <SectionTest /> */}
			{/* <SectionScroll /> */}
			<SectionAbout />
			<SectionFeatuedProjects />
			<SectionContact />
			<LanguageSwitcher />
			<ContactButton />
		</main>
	);
}
