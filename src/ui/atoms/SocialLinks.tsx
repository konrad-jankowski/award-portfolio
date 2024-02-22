import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@/navigation";

const links = [
	{ name: "facebook", link: "/", Icon: FaFacebookF },
	{ name: "instagram", link: "/", Icon: FaInstagram },
	{ name: "github", link: "/", Icon: FaGithub },
	{ name: "linkedin", link: "/", Icon: FaLinkedinIn },
];

export const SocialLinks = () => {
	return (
		<>
			{links.map((link) => (
				<Link
					href="/"
					key={link.name}
					className="social-links flex h-20 w-full items-center justify-center rounded-3xl bg-colorText/10 text-colorText  "
				>
					<link.Icon size={26} />
				</Link>
			))}
		</>
	);
};
