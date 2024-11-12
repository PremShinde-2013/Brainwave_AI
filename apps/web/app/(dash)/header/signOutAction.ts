// server/signOutAction.ts
"use server";
import { signOut } from "@/server/auth";

export async function handleSignOut() {
  await signOut();
}
