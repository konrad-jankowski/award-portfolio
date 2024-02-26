import { useTranslations } from "next-intl";
import { BackgroundCircle } from "@/ui/atoms/BackgroundCircle";
import { ContactButton } from "@/ui/atoms/ContactButton";
import { LanguageSwitcher } from "@/ui/atoms/LanguageSwitcher";
import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";
import { SectionContact } from "@/ui/organisms/SectionContact/SectionContact";
import { SectionFeatuedProjects } from "@/ui/organisms/SectionFeatuedProjects/SectionFeatuedProjects";

type FAQItem = {
	question: string;
	answer: string;
};

export default function Home() {
	const about = useTranslations("About");
	const aboutArray = about.raw("faq") as FAQItem[];

	return (
		<main>
			<BackgroundCircle />
			<SectionHero />
			<SectionAbout
				heading={about("heading")}
				whatIdo={about("what-i-do")}
				whatIdoDescription={about("what-i-do-description")}
				aboutArray={aboutArray}
			/>
			<SectionFeatuedProjects />
			<SectionContact />
			<LanguageSwitcher />
			<ContactButton />
		</main>
	);
}
