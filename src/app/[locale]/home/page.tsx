import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();
  return (
    <div>
      <main>
          {t("welcome")}
      </main>
    </div>
  );
}
