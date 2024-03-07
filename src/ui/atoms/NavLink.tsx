import React from "react";

export const NavLink = ({
	setToggle,
	link,
	title,
}: {
	setToggle: (toggle: boolean) => void;
	link: string;
	title: string;
}) => {
	const handleClick = () => {
		setToggle(false);
		const element = document.getElementById(link);
		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	console.log(link);

	return (
		<a onClick={handleClick} className="text-5xl hover:opacity-60">
			{title}
		</a>
	);
};
