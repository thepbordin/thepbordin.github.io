"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/Navbar/resizable-navbar";
import { Button, Spacer } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavbarSection() {
  const navItems = [
    {
      name: "W-'M-I",
      link: "#whoami",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Awards",
      link: "#awards",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderThemeChanger = () => {
    if (!mounted) {
      return (
        <Button
          isIconOnly
          variant="bordered"
          color="primary"
          aria-label="Loading theme"
          isDisabled
        />
      );
    }

    return (
      <Button
        isIconOnly
        variant="light"
        color="primary"
        aria-label="Toggle theme"
        onPress={handleThemeSwitch}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    );
  };

  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {renderThemeChanger()}

            <Button color="primary" className="text-white">
              Contact Me
            </Button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Button
                onPress={() => setIsMobileMenuOpen(false)}
                color="primary"
                className="w-full"
              >
                Login
              </Button>
              <Button
                onPress={() => setIsMobileMenuOpen(false)}
                color="primary"
                className="w-full"
              >
                Book a call
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Spacer y={32} id="navbar-spacer" />
    </>
  );
}
