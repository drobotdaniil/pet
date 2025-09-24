import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Pet App",
};

const raleway = Raleway();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
