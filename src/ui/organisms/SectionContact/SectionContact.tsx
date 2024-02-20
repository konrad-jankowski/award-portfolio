import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@/navigation";

const links = [
	{ name: "facebook", link: "/", Icon: FaFacebookF },
	{ name: "instagram", link: "/", Icon: FaInstagram },
	{ name: "github", link: "/", Icon: FaGithub },
	{ name: "linkedin", link: "/", Icon: FaLinkedinIn },
];

export const SectionContact = () => {
	return (
		<div className="bg-colorBackground px-10 py-5 text-colorText lg:p-section">
			<div className=" py-8 text-center lg:py-20 ">
				<h3 className="text-xl lg:text-4xl">Got a project? Need an unfair advantage?</h3>
				<h2 className="mt-4 text-4xl font-medium lg:text-7xl">GET IN TOUCH</h2>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{links.map((link) => (
					<Link
						href="/"
						key={link.name}
						className="flex h-20 w-full items-center justify-center rounded-3xl bg-colorText/10"
					>
						<link.Icon size={26} />
					</Link>
				))}
			</div>
			<p className="py-8 text-center text-xs lg:text-sm">
				© 2024 Konrad Jankowski | All Rights Reserved.{" "}
			</p>
		</div>
	);
};
