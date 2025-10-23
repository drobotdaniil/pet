"use client";

import { useLocale } from "next-intl";

import { useTransition } from "react";

import { usePathname, useRouter } from "@i18n/navigation";

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
        router.refresh();
      });
    }
  };

  return (
    <select
      value={locale}
      onChange={(event) => handleSwitchLocale(event.target.value)}
      disabled={isPending}
    >
      <option value="en">EN</option>
      <option value="it">IT</option>
    </select>
  );
}
