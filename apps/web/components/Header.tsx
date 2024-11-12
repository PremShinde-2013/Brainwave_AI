'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../public/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeIcon, UsersIcon, ListIcon, StarIcon } from "lucide-react"; // Add icons here
import ShinyButton from "@/components/magicui/shiny-button";

export const SlideNavTabs = () => {
	return (
		<div className="fixed right-0 left-0 top-5 z-30 mx-auto text-black dark:text-white bg-transparent">
			<SlideTabs />
		</div>
	);
};

const SlideTabs = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});
	const [isMobile, setIsMobile] = useState(false);

	// Detect screen size for mobile mode
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Set threshold for mobile view
		};
		handleResize(); // Check on initial load
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}));
			}}
			className="flex relative items-center py-3 px-5 mx-auto text-sm text-black dark:text-gray-200 bg-gradient-to-tr to-transparent rounded-full border-2 w-fit border-white/5 from-zinc-300/5 via-gray-100/5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter"
		>
			<Link href={"/"} className="flex items-start mr-4 opacity-50 h-fit">
				<Image src={Logo} alt="Supermemory logo" className="bg-black rounded-full" width={40} height={40} />
			</Link>

			<Tab key={0} setPosition={setPosition}>
				<Link className="w-full h-full" href={"/home"}>
					{isMobile ? <HomeIcon /> : "Home"}
				</Link>
			</Tab>
			<Tab setPosition={setPosition}>
				<Link className="w-full h-full" href={"/#use-cases"}>
					{isMobile ? <ListIcon /> : "Use Cases"}
				</Link>
			</Tab>
			<Tab setPosition={setPosition}>
				<Link className="w-full h-full" href={"/#features"}>
					{isMobile ? <StarIcon /> : "Features"}
				</Link>
			</Tab>
			<Tab setPosition={setPosition}>
				<Link
					className="w-full h-full"
					href={"https://github.com/Dhravya/supermemory/graphs/contributors"}
				>
					{isMobile ? <UsersIcon /> : "Team"}
				</Link>
			</Tab>
			<Link href="https://github.com/PremShinde-2013/BrainWave-AI"
			>
				<ShinyButton text="Github" className="rounded-3xl" />
			</Link>


			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
}: {
	children: React.ReactNode;
	setPosition: ({
		left,
		width,
		opacity,
	}: {
		left: number;
		width: number;
		opacity: number;
	}) => void;
}) => {
	const ref = useRef<HTMLLIElement>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;
				const { width } = ref.current.getBoundingClientRect();
				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="block relative z-10 py-2.5 px-3 text-xs text-black dark:text-white cursor-pointer md:py-2 md:px-5 md:text-base mix-blend-difference"
		>
			{children}
		</li>
	);
};

// @ts-ignore
const Cursor = ({ position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 bg-glass-gradient bg-transparent rounded-full md:h-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-lg backdrop-filter"
		/>
	);
};
