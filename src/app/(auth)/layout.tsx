import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { PropsWithChildren } from "react";

import { Stack } from "@mui/material";

import { PageLayout } from "../components/PageLayout";
import { pages } from "../constants/pages";
import { auth } from "./auth";

export default async function AuthLayout(props: Readonly<PropsWithChildren>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect(pages.root);
  }

  return (
    <PageLayout isAuth={false}>
      <Stack
        sx={{
          height: "calc(100dvh - 65px)",
          maxHeight: "calc(100dvh - 65px)",
          justifyContent: "space-between",
          mx: "auto",
          width: "100%",
        }}
      >
        <Stack gap={3} flex={1} justifyContent="center" flexDirection="column" alignItems="center">
          {props.children}
        </Stack>
      </Stack>
    </PageLayout>
  );
}
