import { Link } from "@/navigation";

export const LanguageSwitcher = () => {
	return (
		<div className="group fixed bottom-10 left-10 z-50 flex cursor-pointer items-center overflow-hidden rounded-md bg-colorText/20 font-secondary text-colorText transition-all duration-300 ">
			<div className="flex items-center justify-center rounded-md p-3 group-hover:bg-colorText/70 group-hover:text-colorBackground">
				<svg
					width="25"
					height="24"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.9301 21.5C11.6162 21.5 10.3812 21.2506 9.22502 20.752C8.06887 20.2533 7.06318 19.5765 6.20797 18.7217C5.35273 17.8669 4.67568 16.8616 4.17679 15.706C3.67791 14.5504 3.42847 13.3156 3.42847 12.0017C3.42847 10.6877 3.6778 9.45268 4.17647 8.29655C4.67513 7.1404 5.35188 6.13472 6.20672 5.2795C7.06157 4.42427 8.06681 3.74721 9.22244 3.24833C10.3781 2.74944 11.6128 2.5 12.9268 2.5C14.2407 2.5 15.4757 2.74933 16.6319 3.248C17.788 3.74667 18.7937 4.42342 19.6489 5.27825C20.5042 6.1331 21.1812 7.13834 21.6801 8.29398C22.179 9.44959 22.4284 10.6844 22.4284 11.9983C22.4284 13.3122 22.1791 14.5473 21.6804 15.7034C21.1818 16.8596 20.505 17.8652 19.6502 18.7205C18.7953 19.5757 17.7901 20.2527 16.6344 20.7516C15.4788 21.2505 14.2441 21.5 12.9301 21.5ZM11.9284 19.95V18C11.3784 18 10.9076 17.8041 10.5159 17.4125C10.1243 17.0208 9.92844 16.55 9.92844 16V15L5.12844 10.2C5.07844 10.5 5.03261 10.8 4.99094 11.1C4.94928 11.4 4.92844 11.7 4.92844 12C4.92844 14.0166 5.59094 15.7833 6.91594 17.3C8.24094 18.8166 9.91178 19.7 11.9284 19.95ZM18.8284 17.4C19.1618 17.0333 19.4618 16.6375 19.7284 16.2125C19.9951 15.7875 20.2159 15.3458 20.3909 14.8875C20.5659 14.4291 20.6993 13.9583 20.7909 13.475C20.8826 12.9916 20.9284 12.5 20.9284 12C20.9284 10.3618 20.4759 8.86573 19.5707 7.51173C18.6656 6.15774 17.4515 5.18075 15.9284 4.58075V4.99998C15.9284 5.54998 15.7326 6.02081 15.3409 6.41248C14.9493 6.80414 14.4784 6.99998 13.9284 6.99998H11.9284V8.99998C11.9284 9.28331 11.8326 9.52081 11.6409 9.71248C11.4493 9.90414 11.2118 9.99998 10.9284 9.99998H8.92844V12H14.9284C15.2118 12 15.4493 12.0958 15.6409 12.2875C15.8326 12.4791 15.9284 12.7166 15.9284 13V16H16.9284C17.3618 16 17.7534 16.1291 18.1034 16.3875C18.4534 16.6458 18.6951 16.9833 18.8284 17.4Z"
						fill="currentColor"
					></path>
				</svg>
			</div>
			<div className="flex max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-64 ">
				<Link href="/" locale="pl" className="pl-4 hover:opacity-60">
					Polish
				</Link>
				<Link href="/" locale="en" className="px-4 hover:opacity-60">
					English
				</Link>
			</div>
		</div>
	);
};
