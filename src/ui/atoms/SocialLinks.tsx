import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@/navigation";

const links = [
	{ name: "facebook", link: "/", Icon: FaFacebookF },
	{ name: "instagram", link: "/", Icon: FaInstagram },
	{ name: "github", link: "/https://github.com/konrad-jankowski", Icon: FaGithub },
	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/konrad-jankowski-84b038275/",
		Icon: FaLinkedinIn,
	},
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
