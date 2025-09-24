import { PropsWithChildren } from "react";

import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "./theme";

export function ThemeProvider(props: Readonly<PropsWithChildren>) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles
        styles={{
          "*": {
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "100px",
            },
            "&::-webkit-scrollbar-button": {
              display: "none",
            },
            "&::-webkit-scrollbar-track, &::-webkit-scrollbar-corner": {
              borderRadius: "8px",
            },
          },
        }}
      />

      {children}
    </MuiThemeProvider>
  );
}
