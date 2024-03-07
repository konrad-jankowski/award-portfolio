import React from "react";
import { useTranslations } from "next-intl";
import { HeroHeading } from "@/ui/atoms/HeroHeading/HeroHeading";

export const SectionHero = () => {
	const t = useTranslations("Hero");

	return (
		<section className="relative flex h-screen w-full items-center justify-start bg-colorBackground lg:p-section">
			<HeroHeading hello={t("hello")} intro={t("intro")} intro2={t("intro2")} />
			<div className="absolute bottom-32 mx-auto max-w-[240px] pl-10 font-secondary text-colorText lg:bottom-40">
				{t("aboutMe")}
			</div>
			<div className="absolute bottom-10 left-0 right-0 flex w-full animate-bounce justify-center font-secondary text-colorText">
				<p className="border-b border-colorText">{t("avaliable")}</p>
			</div>
			<div className="fixed right-10 top-40 z-20 rounded-full bg-gradient-to-l from-colorText to-colorBackground opacity-20 blur-2xl lg:h-[480px] lg:w-[400px]" />
		</section>
	);
};
