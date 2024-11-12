"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { SlideNavTabs } from "../../components/Header";

function NavbarContent() {
	return (
		<div>
			<SlideNavTabs />
		</div>
	);
}

export const Navbar = () => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Calculate scroll direction
		if (typeof current === "number") {

			let direction = current! - scrollYProgress.getPrevious()!;

			// Show navbar when near the top (less than 0.05 scroll progress)
			if (scrollYProgress.get() < 0.05) {
				setVisible(true); // Always show the navbar when near the top
			} else {
				// Toggle navbar visibility based on scroll direction
				if (direction < 0) {
					setVisible(true); // Show navbar when scrolling up
				} else {
					setVisible(false); // Hide navbar when scrolling down
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.nav
				initial={{
					y: -150,
					opacity: 1,
				}}
				animate={{
					y: visible ? -50 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
					ease: "easeOut",
				}}
				className="fixed z-[99999] inset-x-0 mt-12 w-full px-4 sm:px-8 md:px-24 text-sm flex"
			>
				{/* <NavbarContent /> */}
				<SlideNavTabs />

			</motion.nav>
		</AnimatePresence>
	);
};
