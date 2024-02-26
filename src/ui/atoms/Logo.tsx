import { Link } from "@/navigation";

export const Logo = () => {
	return (
		<Link href="/" className="logo z-50 text-center font-bold">
			<div className="text-sm  tracking-wider lg:text-base ">Konrad_Jankowski</div>
			<div className=" text-[0.5rem] tracking-widest lg:text-xs">{"< web developer />"}</div>
		</Link>
	);
};
