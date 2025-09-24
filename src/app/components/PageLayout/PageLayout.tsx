import { PropsWithChildren } from "react";

import { Box, Container, Stack, type SxProps } from "@mui/material";

import { Header } from "../Header";
import { Navigation } from "../Navigation";

export type PageLayoutProps = {
  sx?: SxProps;
  containerSx?: SxProps;
  leftSideContent?: React.ReactNode;
  fixHeightToViewport?: boolean;
  isAuth?: boolean;
  fullScreen?: boolean;
} & PropsWithChildren;

export function PageLayout(props: PageLayoutProps) {
  const { sx, children, fixHeightToViewport, fullScreen, isAuth = true } = props;

  return (
    <Stack
      sx={{
        height: fixHeightToViewport ? "100vh" : "auto",
        minHeight: "100vh",
        maxWidth: "100vw",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        overflow: fixHeightToViewport ? "hidden" : "unset",
      }}
    >
      <Header isAuth={isAuth} />

      <Stack
        sx={{
          flexDirection: "row",
          flexGrow: 1,
          overflow: fixHeightToViewport ? "hidden" : "initial",
        }}
      >
        {isAuth && (
          <Box component="aside" sx={{ flexShrink: 0 }}>
            <Navigation />
          </Box>
        )}

        <Container
          component="main"
          sx={{
            maxWidth: "100vw",
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,

            ...(fullScreen && {
              p: "0 !important",
              maxWidth: "unset !important",
            }),

            ...sx,
          }}
        >
          {children}
        </Container>
      </Stack>
    </Stack>
  );
}
