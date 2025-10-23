import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Raleway } from "next/font/google";
import { notFound } from "next/navigation";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { routing } from "../../i18n/routing";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Pet App",
};

const raleway = Raleway();

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={raleway.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
