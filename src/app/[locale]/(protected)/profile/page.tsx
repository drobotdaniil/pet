import { headers } from "next/headers";

import { auth } from "@app/[locale]/(auth)/auth";
import { Stack, Typography } from "@mui/material";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <Stack p={3} gap={3}>
      <Stack gap={1}>
        <Typography variant="DisplayH3">Hello, {session?.user.name}!</Typography>

        <Typography variant="BodyL">Welcome to your profile page.</Typography>
        {/* <Typography variant="BodyL">
            Here you can manage your account settings and preferences.
          </Typography> */}

        <Typography variant="BodyL">Enjoy your stay!</Typography>
      </Stack>

      <Typography variant="BodyL">email: {session?.user.email}</Typography>
    </Stack>
  );
}
