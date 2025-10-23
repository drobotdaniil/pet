import { pages } from "@app/[locale]/constants/pages";
import { Link } from "@i18n/navigation";
import { Stack, Typography } from "@mui/material";

import { LocaleSwitcher } from "../LocaleSwitcher";
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
        <Link href={pages.root} style={{ textDecoration: "none" }}>
          <Typography>PET</Typography>
        </Link>

        <Stack gap={2} direction="row" alignItems="center">
          <LocaleSwitcher />

          {isAuth && <Logout />}
        </Stack>
      </Stack>
    </Stack>
  );
}
