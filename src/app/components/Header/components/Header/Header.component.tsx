import Link from "next/link";

import { pages } from "@app/constants/pages";
import { Stack, Typography } from "@mui/material";

import { Logout } from "../Logout";

type HeaderProps = {
  isAuth: boolean;
};

export function Header(props: HeaderProps) {
  const { isAuth } = props;

  return (
    <Stack
      component="header"
      sx={{
        p: "12px 20px",
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderBottomColor: "divider",
        gap: 1,
        height: 65,
        justifyContent: "center",
      }}
    >
      <Stack direction="row" alignItems="center" gap="28px" justifyContent="space-between">
        <Typography component={Link} href={pages.root} sx={{ textDecoration: "none" }}>
          PET
        </Typography>

        {isAuth && <Logout />}
      </Stack>
    </Stack>
  );
}
