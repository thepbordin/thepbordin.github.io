import Hero from "@/components/sections/Hero";
import { NavbarSection as Navbar } from "@/components/sections/Narbar";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations();
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
