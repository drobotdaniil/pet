"use client";

import { Button } from "@mui/material";

import { signOut } from "../../../../(auth)/actions/auth";
import { useRouter } from "../../../../../../i18n/navigation";
import { pages } from "../../../../constants/pages";

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
