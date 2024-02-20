import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";

type ProjectProps = {
	name: string;
	category: string;
	featuredImg: string;
	responsibility: string[];
	dateOfBuild: number;
	link: string;
};

export const Project = ({
	category,
	dateOfBuild,
	name,
	featuredImg,
	responsibility,
	link,
}: ProjectProps) => {
	return (
		<div className=" rounded-3xl border-t border-colorText/50 text-colorText">
			<div className="my-8 ml-6 flex items-center justify-between gap-10 font-secondary">
				<h4 className="text-lg font-medium lg:text-xl">{name}</h4>
				<Link href={link} className="mr-6 flex items-center gap-3 text-lg lg:gap-5">
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
						src={featuredImg}
						className="rounded-3xl object-cover transition-transform duration-500 hover:scale-110"
						fill
						alt="project"
					/>
				</div>
			</Link>
			<div className="my-6 flex flex-wrap justify-end gap-4 font-secondary text-base lg:text-lg">
				{responsibility.map((item) => (
					<div
						key={item}
						className="rounded-full border border-colorText px-4 py-1 uppercase text-colorText"
					>
						{item}
					</div>
				))}
				<div className="rounded-full border bg-colorText px-4 py-1 uppercase text-colorBackground">
					{dateOfBuild}
				</div>
			</div>
		</div>
	);
};
