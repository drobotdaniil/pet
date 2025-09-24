import Link from "next/link";

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
          <Typography
            component={Link}
            sx={{ textDecoration: "none" }}
            key={item.title}
            href={item.to}
          >
            {item.title}
          </Typography>
        ))}
      </Stack>
    </Paper>
  );
}
