import React from "react";

export const BackgroundCircle = () => {
	return (
		<div className="fixed inset-0 z-10 flex items-center justify-center">
			<div className="">
				<div className="h-80 w-80 rounded-full bg-gradient-to-b from-colorText/10 from-[14%] to-transparent to-[62%] lg:h-[600px] lg:w-[600px]"></div>
			</div>
		</div>
	);
};
