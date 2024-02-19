import { Link } from "@/navigation";

const links = [
	{ name: "facebook", link: "/" },
	{ name: "instagram", link: "/" },
	{ name: "github", link: "/" },
	{ name: "linkedin", link: "/" },
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-instagram"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
					</Link>
				))}
			</div>
			<p className="py-8 text-center text-sm">© 2024 Konrad Jankowski | All Rights Reserved. </p>
		</div>
	);
};
