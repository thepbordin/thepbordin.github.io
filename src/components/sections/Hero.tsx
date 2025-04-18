import { Spacer } from "@heroui/react";
import RotatingText from "../ui/TextAnimations/RotatingText/RotatingText";

export default function Hero() {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center">
        <Spacer y={24} />
        <span className="font-serif text-5xl">
          I'm gonna describe myself as.
        </span>
        {/* <DecayCard
          width={200}
          height={300}
          image="https://media.licdn.com/dms/image/v2/D5603AQFRbcDMLu7xNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710483325111?e=1750291200&v=beta&t=pZmLyjMlPGV0XKl6jPflXmSMEogWRE8VorJVcPvdYGk"
        /> */}
        <h1 className="flex w-screen justify-center gap-3 font-serif font-light duration-100 lg:text-7xl">
          <span>a</span>
          <span className="text-primary-500">Digital</span>
          <RotatingText
            texts={["Creative.", "Creator."]}
            mainClassName="text-primary-500 font-light inline flex"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 min-h-24"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </h1>
      </div>
    </>
  );
}
