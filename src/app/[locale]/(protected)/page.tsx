import { getTranslations } from "next-intl/server";

import { Stack } from "@mui/material";

export default async function Home() {
  const t = await getTranslations("common");

  return <Stack>{t("welcome")}</Stack>;
}
