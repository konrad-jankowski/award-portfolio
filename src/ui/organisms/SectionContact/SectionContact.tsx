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
		<div className="bg-colorBackground px-20 py-5 text-colorText">
			<div className=" py-20 text-center ">
				<h3 className="text-4xl">Got a project? Need an unfair advantage?</h3>
				<h2 className="mt-4 text-7xl font-medium">GET IN TOUCH</h2>
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
			<p className="py-8 text-center text-sm">© 2024 Konrad Jankowski | All Rights Reserved. </p>
		</div>
	);
};
