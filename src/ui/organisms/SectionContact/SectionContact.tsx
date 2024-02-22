import { useTranslations } from "next-intl";
import { SocialLinks } from "@/ui/atoms/SocialLinks";

export const SectionContact = () => {
	const t = useTranslations("Contact");

	return (
		<div className=" bg-colorBackground px-10 py-5 text-colorText lg:p-section">
			<div className="relative z-50 py-8 text-center lg:py-20 ">
				<h3 className="text-xl lg:text-4xl">{t("question")}</h3>
				<h2 className="mt-4 text-4xl font-medium lg:text-7xl">{t("get-in")}</h2>
			</div>
			<div className="relative z-50 grid grid-cols-4 gap-2.5 lg:gap-5">
				<SocialLinks />
			</div>
			<p className="relative z-50 py-8 text-center font-secondary text-sm lg:text-base">
				{t("credentials")}
			</p>
		</div>
	);
};
