import "@/app/globals.css";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";

const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thepbordin J.",
  description: "Thepbordin Jaiinsom's Personal Website",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "th")) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${IBMPlexSansThai.className} relative flex h-full min-h-screen antialiased`}
        >
          <div id="scroll-wrapper" className="flex flex-grow flex-col">
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
