"use client";

import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const HeroHeading = () => {
	const [role, setRole] = useState("WEB DEVELOPER");
	const roles = ["WEB DEVELOPER", "FRONT END DEVELOPER", "BACK END DEVELOPER"];

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger, useGSAP);
	}

	useGSAP(() => {
		// Animacja początkowa
		gsap.to(".animate-text", {
			duration: 1,
			opacity: 1,
			y: -20,
			stagger: 0.2,
			ease: "power2.out",
		});

		// Ustawienie interwału do zmiany roli
		const interval = setInterval(() => {
			setRole((currentRole) => {
				const currentIndex = roles.indexOf(currentRole);
				const nextIndex = (currentIndex + 1) % roles.length;
				return roles[nextIndex];
			});

			// Ponowne animowanie tekstu po zmianie
			gsap.fromTo(".role", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
		}, 3000); // Zmiana co 3 sekundy

		return () => clearInterval(interval); // Czyszczenie interwału przy demontażu komponentu
	}, []);

	useGSAP(() => {
		gsap.to(".text-container", {
			opacity: 0,
			duration: 4,
			scrollTrigger: {
				trigger: ".text-container",
				start: "-100rem 10rem",
				end: "center",
				// toggleActions: "restart pouse reverse pouse",
				scrub: 1,
			},
		});
	}, {});

	return (
		<div className=" relative flex flex-col items-center gap-4 text-center">
			<div className="text-container">
				<p
					className="animate-text inline-flex items-center gap-6 text-5xl font-bold tracking-wider text-colorText lg:text-9xl"
					style={{ opacity: 0 }}
				>
					<span className="h-6 w-6 rounded-full bg-colorText" /> Hello
					<span className="h-6 w-6 rounded-full bg-colorText" />
				</p>
				<br />
				<p
					className="stroked animate-text inline-flex items-center gap-6 py-8 text-center text-5xl font-bold text-colorText lg:text-9xl"
					style={{ opacity: 0 }}
				>
					MY NAME IS
				</p>
				<br />
				<p
					className="animate-text  inline-flex items-center gap-6 text-center text-4xl font-bold tracking-wider text-colorText lg:text-8xl"
					style={{ opacity: 0 }}
				>
					Konrad
				</p>
			</div>
		</div>
	);
};
