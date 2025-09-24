import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@app/(auth)/auth";
import { PageLayout } from "@app/components/PageLayout";
import { pages } from "@app/constants/pages";
import { Stack, Typography } from "@mui/material";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(pages.signIn);
  }

  return (
    <PageLayout>
      <Stack p={3} gap={3}>
        <Stack gap={1}>
          <Typography variant="DisplayH3">Hello, {session.user.name}!</Typography>

          <Typography variant="BodyL">Welcome to your profile page.</Typography>
          {/* <Typography variant="BodyL">
            Here you can manage your account settings and preferences.
          </Typography> */}

          <Typography variant="BodyL">Enjoy your stay!</Typography>
        </Stack>

        <Typography variant="BodyL">email: {session.user.email}</Typography>
      </Stack>
    </PageLayout>
  );
}
