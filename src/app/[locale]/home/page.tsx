import SplitText from "@/components/ui/TextAnimations/SplitText/SplitText";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <main>
        {/* <HelloAnimation /> */}
        <div className="">
          <p>sigma</p>
          <SplitText
            text={t("welcome")}
            className="text-center text-8xl font-black"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
      </main>
    </div>
  );
}
