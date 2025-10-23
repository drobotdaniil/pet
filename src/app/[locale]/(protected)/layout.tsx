import { headers } from "next/headers";

import { PropsWithChildren } from "react";

import { redirect } from "@i18n/navigation";

import { auth } from "../(auth)/auth";
import { PageLayout } from "../components/PageLayout";
import { pages } from "../constants/pages";

export default async function ProtectedLayout(
  props: Readonly<PropsWithChildren & { params: Promise<{ locale: string }> }>,
) {
  const { params } = props;

  const { locale } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect({ href: pages.signIn, locale });
  }

  return <PageLayout>{props.children}</PageLayout>;
}
