import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";

export const Project = () => {
	return (
		<div className=" rounded-3xl border-t border-colorText/50 text-colorText">
			<div className="my-8 ml-6 flex items-center justify-between gap-10">
				<h4 className="text-xl font-medium">Nieruchomości.pl</h4>
				<Link href="/" className="mr-6 flex items-center gap-5">
					View project{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-move-right"
					>
						<path d="M18 8L22 12L18 16" />
						<path d="M2 12H22" />
					</svg>
				</Link>
			</div>
			<Link href="/">
				<div className="relative h-[26rem] w-full overflow-hidden rounded-3xl ">
					<Image
						src="/project.png"
						className="rounded-3xl object-cover transition-transform duration-500 hover:scale-110"
						fill
						alt="project"
					/>
				</div>
			</Link>
			<div className="my-6 flex justify-end gap-4">
				<div className="rounded-full border px-4 py-1 uppercase">design</div>
				<div className="rounded-full border px-4 py-1 uppercase">develop</div>
				<div className="rounded-full border bg-white px-4 py-1 uppercase text-black">2023</div>
			</div>
		</div>
	);
};
