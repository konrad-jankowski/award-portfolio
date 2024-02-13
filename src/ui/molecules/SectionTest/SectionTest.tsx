"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const SectionTest = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		document.querySelectorAll(".main > div").forEach((panel) => {
			ScrollTrigger.create({
				trigger: panel,
				start: "top center+=100", // Zmniejsz wartość, aby zmiana nastąpiła wcześniej
				end: "bottom center-=100", // Zwiększ wartość, aby zmiana nastąpiła wcześniej przy przewijaniu do góry
				onEnter: () =>
					changeBackground(
						panel.getAttribute("data-bgcolor"),
						panel.getAttribute("data-textcolor"),
					),
				onEnterBack: () =>
					changeBackground(
						panel.getAttribute("data-bgcolor"),
						panel.getAttribute("data-textcolor"),
					), // Zmiana tutaj
				markers: true, // Do debugowania, później usunąć
				scrub: 0.5, // Dostosuj długość scrubbingu
			});
		});

		const changeBackground = (bgcolor: string, textcolor: string) => {
			gsap.to(".main", { backgroundColor: bgcolor, color: textcolor, duration: 0.3 });
		};
	}, []);

	return (
		<section className="main" style={{ transition: "background-color 0.3s" }}>
			<div className="h-screen w-full" data-bgcolor="black" data-textcolor="blue">
				Red Section
			</div>
			<div className="h-screen w-full" data-bgcolor="gray" data-textcolor="red">
				Blue Section
			</div>
		</section>
	);
};
