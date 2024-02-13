"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const CustomCursor = () => {
	useGSAP(() => {
		const cursor = document.getElementById("custom-cursor");
		const links = document.querySelectorAll("a");
		const cursorText = document.querySelector(".cursor-text");

		const onMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			gsap.set(cursor, { x: clientX, y: clientY, backgroundColor: "white" });
		};

		const onMouseEnterLink = (event: MouseEvent) => {
			const link = event.target as HTMLElement;
			if (link.classList.contains("view")) {
				gsap.to(cursor, { scale: 4, duration: 0.3 });
				cursorText.style.display = "block";
			} else {
				gsap.to(cursor, { scale: 4, duration: 0.3 });
			}
		};

		const onMouseLeaveLink = () => {
			gsap.to(cursor, { scale: 1, duration: 0.3 });
			cursorText.style.display = "none";
		};

		document.addEventListener("mousemove", onMouseMove);
		links.forEach((link) => {
			link.addEventListener("mouseenter", onMouseEnterLink);
			link.addEventListener("mouseleave", onMouseLeaveLink);
		});

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			links.forEach((link) => {
				link.removeEventListener("mouseenter", onMouseEnterLink);
				link.removeEventListener("mouseleave", onMouseLeaveLink);
			});
		};
	}, []);

	return (
		<div id="custom-cursor" className="custom-cursor">
			<span className="cursor-text ">View</span>
		</div>
	);
};
