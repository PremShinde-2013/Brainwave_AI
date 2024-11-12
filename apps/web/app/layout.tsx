import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@repo/ui/lib/utils";
import { Toaster } from "@repo/ui/shadcn/toaster";
import { PHProvider } from "./providers";
import PostHogPageView from "./PHPageViews";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
	title: "brainwave - Your personal second brain.",
	description:
		"Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
	openGraph: {
		images: [
			{
				url: "https://brainwave.ai/og-image.png",
				width: 1200,
				height: 627,
				alt: "brainwave - Your personal second brain.",
			},
		],
	},
	metadataBase: {
		host: "https://brainwave.ai",
		href: "/",
		origin: "https://brainwave.ai",
		password: "brainwave",
		hash: "brainwave",
		pathname: "/",
		search: "",
		username: "brainwaveai",
		hostname: "brainwave.ai",
		port: "",
		protocol: "https:",
		searchParams: new URLSearchParams(""),
		toString: () => "https://brainwave.ai/",
		toJSON: () => "https://brainwave.ai/",
	},
	twitter: {
		card: "summary_large_image",
		site: "https://brainwave.ai",
		creator: "https://brainwave.ai",
		title: "brainwave - Your personal second brain.",
		description:
			"Bring saved information from all over the internet into one place where you can connect it, and ask AI about it",
		images: [
			{
				url: "https://brainwave.ai/og-image.png",
				width: 1200,
				height: 627,
				alt: "brainwave - Your personal second brain.",
			},
		],
	},
	manifest: "/manifest.webmanifest",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
			<head>
				{/* Cloudflare web analytics */}
				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "16d76ebb82c74d9983b71d09ab6617bc"}'
				></script>
			</head>
			<PHProvider>
				<body
					// className={cn(
					// 	`${inter.className} dark`,
					// 	GeistMono.variable,
					// 	GeistSans.variable,
					// )}
					className={inter.className}
				> <ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
						{children}
						<Toaster />
						{/* <PostHogPageView /> */}
					</ThemeProvider></body>
			</PHProvider>
		</html>
	);
}
