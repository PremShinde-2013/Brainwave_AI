// app/(dash)/header/signOutButton.tsx
'use client';
import { handleSignOut } from "./signOutAction"; // Import the server action
import { Button } from "@repo/ui/shadcn/button";

export default function SignOutButton() {
	return (
		<form
			action={handleSignOut} // Call the server-side function directly
		>
			<Button
				variant="ghost"
				size="sm"
				type="submit"
				className="text-[#7D8994]"
			>
				Sign Out
			</Button>
		</form>
	);
}
