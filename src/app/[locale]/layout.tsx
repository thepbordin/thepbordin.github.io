import "@/app/globals.css";
import { routing } from "@/i18n/routing";
import NextIntlProvider from "@/providers/NextIntlProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";

const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
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

  return (
    <html lang={locale} className="bg-background" suppressHydrationWarning>
      <NextIntlProvider locale={locale}>
        <body
          className={`${IBMPlexSansThai.variable} ${PlayfairDisplay.variable} min-h-scree relative flex h-full font-sans antialiased`}
        >
          <ThemeProvider>
            <div
              id="scroll-wrapper"
              className="flex w-screen flex-grow flex-col"
            >
              {children}
            </div>
          </ThemeProvider>
        </body>
      </NextIntlProvider>
    </html>
  );
}
