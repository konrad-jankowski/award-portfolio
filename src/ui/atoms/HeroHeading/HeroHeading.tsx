"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export const HeroHeading = () => {
	const [role, setRole] = useState("WEB DEVELOPER");
	const roles = ["WEB DEVELOPER", "FRONT END DEVELOPER", "BACK END DEVELOPER"];

	useEffect(() => {
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

	return (
		<div className="flex flex-col items-center gap-3 text-center">
			<p
				className="animate-text inline-flex items-center gap-6 text-8xl text-colorText"
				style={{ opacity: 0 }}
			>
				<span className="h-6 w-6 rounded-full bg-colorText" /> HELLO
				<span className="h-6 w-6 rounded-full bg-colorText" />
			</p>
			<br />
			<p
				className="animate-text inline-flex items-center gap-6 text-center text-8xl text-colorText"
				style={{ opacity: 0 }}
			>
				I AM
			</p>
			<br />
			<p
				className="animate-text  inline-flex items-center gap-6 text-center text-8xl text-colorText"
				style={{ opacity: 0 }}
			>
				Konrad
			</p>
		</div>
	);
};
