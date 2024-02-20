import React from "react";

export const SectionHeading = ({ title }: { title: string }) => {
	return (
		<h2 className="mx-auto items-center justify-center gap-6 text-center text-3xl uppercase text-colorText lg:text-6xl">
			{title}
		</h2>
	);
};
