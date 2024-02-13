"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const SectionScroll = () => {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="scroll-section-outer overflow-hidden bg-colorBackground text-colorText">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="scroll-section-inner relative flex h-screen w-[400vw] flex-row "
				>
					<div className="scroll-section h-scroll flex w-screen flex-col items-center justify-center gap-8">
						<h3 className="text-7xl">Now i will tell you my story ...</h3>
					</div>
					<div className="scroll-section h-scroll flex w-screen flex-col items-center justify-center gap-8">
						<h3 className="text-7xl">My Name is Konrad</h3>
						<p className="max-w-4xl text-2xl">
							As Konrad grew, so did his ambitions. He ventured into the realm of technology, where
							he found his true calling. Konrad wasn't just any tech enthusiast; he was a pioneer, a
							creator whose ideas sparked revolutions. He developed a groundbreaking platform that
							transformed how people interacted with digital content, making it more immersive, more
							engaging, and infinitely more meaningful. His name became synonymous with innovation,
							a beacon of progress in the digital age.
						</p>
					</div>
					<div className="scroll-section h-scroll flex w-screen flex-col items-center justify-center gap-8">
						<h3 className="max-w-4xl text-4xl">
							Konrad's life was a testament to the power of dreams and determination. He traveled
							the world, sharing his vision and inspiring others to chase their own dreams. He faced
							challenges and setbacks, but they only fueled his drive to push the boundaries of what
							was possible. His story wasn't just about the technology he created; it was about the
							lives he touched, the communities he built, and the legacy he left behind.
						</h3>
					</div>
					<div className="scroll-section h-scroll flex w-screen flex-col items-center justify-center gap-8">
						<h3 className="max-w-4xl text-4xl">
							Konrad's tale is a beacon for all dreamers, a narrative of aspiration, innovation, and
							the indomitable human spirit. In the sprawling canvas of the universe, his story is a
							vivid stroke of brilliance, a testament to what we can achieve when we dare to dream
							big and never stop believing in the power of our own potential.
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};
