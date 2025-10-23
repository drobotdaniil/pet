import { Link } from "@i18n/navigation";
import { Paper, Stack, Typography } from "@mui/material";

import { navigationItemsConfig } from "./Navigation.configs";

export function Navigation() {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRight: "1px solid",
        borderRightColor: "divider",
        minWidth: "240px",
        py: 1,
        borderRadius: 0,
        height: "100%",
      }}
    >
      <Stack p={2}>
        {navigationItemsConfig.map((item) => (
          <Link href={item.to} style={{ textDecoration: "none" }} key={item.title}>
            <Typography>{item.title}</Typography>
          </Link>
        ))}
      </Stack>
    </Paper>
  );
}
