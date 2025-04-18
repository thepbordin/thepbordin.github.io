// src/providers/NextIntlProvider.tsx
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";

interface NextIntlProviderProps {
  children: React.ReactNode;
  locale: string;
}

export default async function NextIntlProvider({
  children,
  locale,
}: NextIntlProviderProps) {
  if (!routing.locales.includes(locale as "en" | "th")) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
