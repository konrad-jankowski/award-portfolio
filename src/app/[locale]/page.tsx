import { BackgroundCircle } from "@/ui/atoms/BackgroundCircle";
import { ContactButton } from "@/ui/atoms/ContactButton";
import { LanguageSwitcher } from "@/ui/atoms/LanguageSwitcher";
import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";
import { SectionScroll } from "@/ui/molecules/SectionScroll/SectionScroll";
import { SectionContact } from "@/ui/organisms/SectionContact/SectionContact";
import { SectionFeatuedProjects } from "@/ui/organisms/SectionFeatuedProjects/SectionFeatuedProjects";
import { useTranslations } from "next-intl";

export default function Home() {
	const about = useTranslations("About");

	return (
		<main>
			<BackgroundCircle />
			<SectionHero />
			{/* <SectionTest /> */}
			{/* <SectionScroll /> */}
			<SectionAbout
				heading={about("heading")}
				whatIdo={about("what-i-do")}
				whatIdoDescription={about("what-i-do-description")}
			/>
			<SectionFeatuedProjects />
			<SectionContact />
			<LanguageSwitcher />
			<ContactButton />
		</main>
	);
}
