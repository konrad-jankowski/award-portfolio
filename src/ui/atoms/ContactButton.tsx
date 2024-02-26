export const ContactButton = () => {
	return (
		<div className="group fixed bottom-10 right-10 z-50 flex cursor-pointer items-center overflow-hidden rounded-md bg-colorText/20 font-secondary text-colorText transition-all duration-300 ">
			<div className="flex items-center justify-center rounded-md p-3 group-hover:bg-colorText/70 group-hover:p-5 group-hover:text-colorBackground">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.3077 19.5C3.80256 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923L2.5 6.30773C2.5 5.8026 2.675 5.37503 3.025 5.02503C3.375 4.67503 3.80257 4.50003 4.3077 4.50003L19.6923 4.50003C20.1974 4.50003 20.625 4.67503 20.975 5.02503C21.325 5.37503 21.5 5.8026 21.5 6.30773L21.5 17.6923C21.4999 18.1974 21.325 18.625 20.975 18.975C20.6249 19.325 20.1974 19.5 19.6922 19.5L4.3077 19.5ZM12 12.5577L20 7.44228L19.8461 6.00001L12 11L4.15383 6.00001L3.99997 7.44228L12 12.5577Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
			<div className="lg: flex max-w-0 flex-col overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-64 group-hover:px-4 group-hover:py-2 lg:group-hover:px-5 ">
				<a className="text-sm font-medium hover:opacity-60 lg:text-base" href="tel:+48788710291">
					+48 788 710 291
				</a>
				<a
					className="text-sm font-medium hover:opacity-60 lg:text-base"
					href="mailto: konr.jankowski@gmail.com"
				>
					konr.jankowski@gmail.com
				</a>
			</div>
		</div>
	);
};
