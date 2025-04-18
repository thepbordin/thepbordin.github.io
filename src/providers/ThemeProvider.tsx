"use client";

import { HeroUIProvider } from "@heroui/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <>
      <HeroUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
