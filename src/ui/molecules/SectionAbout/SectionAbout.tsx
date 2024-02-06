import { SectionHeading } from "@/ui/atoms/SectionHeading/SectionHeading";

export const SectionAbout = () => {
	return (
		<section className="h-fit w-full bg-colorBackground pb-20 pl-[5rem] text-colorText">
			<SectionHeading />
			<div className="font-secondary mt-20 flex justify-between gap-10">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-5xl font-medium">my workflow.</h3>
					<p className=" max-w-sm text-xl">
						I focus on a web development and services related to it like design animations and much
						more.
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-8">
					<h4 className="text-6xl font-bold">Frontend Development</h4>
					<h4 className="text-6xl font-bold">Backend Development</h4>
					<h4 className="text-6xl font-bold">Headless CMS</h4>
				</div>
			</div>
			<div className="font-secondary mt-20 flex justify-between gap-10">
				<div className="w-full flex-1">
					<h3 className="mb-6 w-full text-5xl font-medium">my stack.</h3>
					<p className=" max-w-sm text-xl">
						This is my stack i used the most in my project based on requirements and projects
						needes. I am also trying to expand and learn new thinks every day.
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-8">
					<h4 className="text-6xl font-bold">Javascript</h4>
					<h4 className="text-6xl font-bold">React</h4>
					<h4 className="text-6xl font-bold">Next js</h4>
					<h4 className="text-6xl font-bold">Strapi</h4>
					<h4 className="text-6xl font-bold">Wordpress</h4>
				</div>
			</div>
		</section>
	);
};
