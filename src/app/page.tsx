import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Stack } from "@mui/material";

import { auth } from "./(auth)/auth";
import { PageLayout } from "./components/PageLayout";
import { pages } from "./constants/pages";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(pages.signIn);
  }

  return (
    <PageLayout>
      <Stack>Hello</Stack>
    </PageLayout>
  );
}
