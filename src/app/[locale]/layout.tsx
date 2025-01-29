import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thepbordin J.",
  description: "Thepbordin Jaiinsom's Personal Website",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as "en" | "th")) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${IBMPlexSansThai.className} antialiased`}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
