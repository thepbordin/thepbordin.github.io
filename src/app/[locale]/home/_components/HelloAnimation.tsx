"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HelloAnimation = () => {
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("animationPlayed", "true");
    setHasAnimationPlayed(false);
    setShowAnimation(true);

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // If animation has already played or shouldn't show, return null
  if (!showAnimation) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
        {/* Main Hello Text */}
        <motion.h1
          className="text-6xl font-bold text-white md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Hello!
        </motion.h1>

        {/* Scrolling text from bottom to top */}
        <motion.div
          className="absolute bottom-0 left-0 w-full text-center text-xl text-white"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Scroll to discover my journey
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelloAnimation;
