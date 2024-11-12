/* eslint-disable @typescript-eslint/no-unused-vars */
import RotatingIcons from "./RotatingIcons";
import Hero from "./Hero";
import { Navbar } from "./Navbar";
import Cta from "./Cta";
import { Toaster } from "@repo/ui/shadcn/toaster";
import Features from "./Features";
import Footer from "../../components/footer";
import { auth } from "@/server/auth";
import Services from "./Features/index";
import { Showcases } from "./Showcase";
import BackgroundPlus from "./GridPatterns/PlusGrid";
import { redirect } from "next/navigation";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@packages/ui/lib/utils";
import GridPattern from "./CardPatterns/AnimatedGrid";
import Quality from "./Quality";
import DotPattern from "@/components/magicui/dot-pattern";

export const runtime = "edge";

export default async function Home() {
	const user = await auth();

	if (user) {
		await redirect("/home");
	}

	return (
		// <>
		// 	<BackgroundPlus />
		// 	<main className="flex overflow-x-hidden relative flex-col items-center px-2 min-h-screen md:px-0 font-geistSans bg-hero-gradient">
		// 		<div className="absolute top-0 -z-10 min-h-screen w-screen overflow-hidden bg-inherit  bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

		// 		<Navbar />

		// 		{/* Background gradients */}
		// 		<div className="absolute top-0 left-0 w-full h-full z-[-1]">
		// 			<div className="overflow-x-hidden">
		// 				<div
		// 					className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-[#369DFD] bg-opacity-70 blur-[337.4px]"
		// 					style={{ transform: "rotate(-30deg)" }}
		// 				/>
		// 			</div>

		// 			{/* a blue gradient line that's slightly tilted with blur (a lotof blur)*/}
		// 			{/* <div className="overflow-x-hidden overflow-y-hidden">
		//   <div
		//     className="absolute left-0 top-[100%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 blur-[337.4px]"
		//     style={{ transform: "rotate(-30deg)" }}
		//   />
		// </div> */}

		// 			{/* <div className="overflow-x-hidden overflow-y-hidden">
		//   <div className="absolute right-0 top-[145%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD] bg-opacity-20 blur-[110px]" />
		// </div> */}
		// 		</div>

		// 		{/* Hero section */}
		// 		<Hero />
		// 		<Showcases />
		// 		<Services />

		// 		{/* Features section */}
		// 		<Features />

		// 		<RotatingIcons />
		// 		<Cta />

		// 		<Toaster />
		// 		<Footer />
		// 	</main>
		// </>

		<>

			<Navbar />
			<div className="relative flex-col flex w-full items-center  justify-center overflow-hidden rounded-lg  bg-background md:p-20 p-6 ">
				<Hero />

				<AnimatedGridPattern
					numSquares={50}
					maxOpacity={0.1}
					duration={3}
					repeatDelay={2}
					className={cn(
						"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
						"inset-x-0 inset-y-[-50%] h-[400%] skew-y-12",
					)}
				/>

			</div>

			<div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-b-0  bg-background md:p-20 p-6  ">
				<Showcases />
				<GridPattern
					width={80}
					height={80}
					x={-1}
					y={-1}
					strokeDasharray={"8"}
					className={cn(
						"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
						"inset-x-0 inset-y-[-50%] h-[300%] ",
					)}
				/>

			</div>

			<Services />
			<Quality />

			<div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg  border-b-0 bg-background p-20 ">
				<RotatingIcons />

				<DotPattern
					width={20}
					height={20}
					cx={2}
					cy={2}
					cr={2}
					className={cn(
						"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
						"inset-x-0 inset-y-[-50%] h-[300%] ",

					)}
				/>
			</div>
			<div className="relative flex h-full w-full mt-10 items-center justify-center overflow-hidden rounded-lg  border-b-0 bg-background md:p-20 p-6  ">
				<Cta />
				<GridPattern
					width={80}
					height={80}
					x={-1}
					y={-1}
					strokeDasharray={"8"}
					className={cn(
						"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
						"inset-x-0 inset-y-[-50%] h-[300%] ",
					)}
				/>

			</div>




			<Footer />

		</>
	);
}
