import React from "react";
import Image from "next/image";
import { Github, Info, Link as Link2 } from "lucide-react";
import { Link } from "@/navigation";

type ProjectProps = {
	name: string;
	category: string;
	featuredImg: string;
	responsibility: string[];
	dateOfBuild: number;
	link: string;
	githubLink: string;
};

export const Project = ({
	category,
	dateOfBuild,
	name,
	featuredImg,
	responsibility,
	link,
	githubLink,
}: ProjectProps) => {
	return (
		<div className="rounded-3xl border-t border-colorText/50 text-colorText">
			<div className="mx-6 my-8 flex items-center justify-between gap-10 font-secondary">
				<h3 className="text-lg font-semibold lg:text-xl">{name}</h3>
				<div className="flex items-center ">
					<a
						target="_blank"
						href={githubLink}
						className="mr-6 flex items-center gap-3 text-lg lg:gap-5"
					>
						<Github />
					</a>
					<a target="_blank" href={link} className="mr-6 flex items-center gap-3 text-lg lg:gap-5">
						<Link2 />
					</a>
					<Info />
				</div>
			</div>
			<Link href="/">
				<div className="relative h-60 w-full overflow-hidden rounded-3xl lg:h-[26rem] ">
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
