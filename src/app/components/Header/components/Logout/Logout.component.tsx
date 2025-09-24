"use client";

import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

import { signOut } from "@/app/(auth)/actions/auth";
import { pages } from "@/app/constants/pages";

export function Logout() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push(pages.signIn);
  };

  return (
    <Button variant="outlined" onClick={handleSignOut}>
      Logout
    </Button>
  );
}
