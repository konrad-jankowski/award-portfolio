"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const SectionTest = () => {
	// useGSAP(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	document.querySelectorAll(".main > div").forEach((panel) => {
	// 		ScrollTrigger.create({
	// 			trigger: panel,
	// 			start: "top center+=100", // Zmniejsz wartość, aby zmiana nastąpiła wcześniej
	// 			end: "bottom center-=100", // Zwiększ wartość, aby zmiana nastąpiła wcześniej przy przewijaniu do góry
	// 			onEnter: () => gsap.to(".div1", {
	// 				backgroundColor:
	// 			})

	// 			onEnterBack: () =>

	// 			markers: true, // Do debugowania, później usunąć
	// 			scrub: 0.5, // Dostosuj długość scrubbingu
	// 		});
	// 	});

	// 	// const changeBackground = (bgcolor: string, textcolor: string) => {
	// 	// 	gsap.to(".main", { backgroundColor: bgcolor, color: textcolor, duration: 0.3 });
	// 	// };
	// }, []);

	return (
		<section className="main">
			<div
				style={{ backgroundColor: "red" }}
				className="div1 h-screen w-full"
				data-bgcolor="black"
				data-textcolor="blue"
			>
				Red Section
			</div>
			<div
				style={{ backgroundColor: "var(--color-primary)" }}
				className="div2 h-screen w-full"
				data-bgcolor="gray"
				data-textcolor="red"
			>
				Blue Section
			</div>
		</section>
	);
};
