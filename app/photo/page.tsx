"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
];

export default function PhotoPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [showNavTitle, setShowNavTitle] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const router = useRouter();

  const close = () => setCurrentIndex(null);

  const next = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : prev
    );

  const prev = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : prev
    );

  // Swipe
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 300);
      setShowNavTitle(y > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`min-h-screen px-6 pt-32 pb-12 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* NAVBAR */}
      <motion.div className="fixed top-6 left-0 right-0 z-50">

        {/* TOP STATE */}
        <AnimatePresence>
          {!showNavTitle && (
            <>
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="absolute left-6"
              >
                <div className="px-5 py-3 rounded-full border shadow-lg bg-[#0f0f0f] border-white/10">
                  <button onClick={() => router.push("/")}>
                    ← Back
                  </button>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                className="absolute right-6"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border shadow-lg bg-[#0f0f0f] border-white/10">
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️" : "🌙"}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* MERGED NAVBAR */}
        <AnimatePresence>
          {showNavTitle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex justify-center"
            >
              <div className="flex items-center justify-between w-[380px] px-5 py-3 rounded-full border shadow-lg bg-[#0f0f0f] border-white/10">

                <button onClick={() => router.push("/")}>
                  ← Back
                </button>

                <span className="font-semibold">Photography</span>

                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? "☀️" : "🌙"}
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* GALLERY */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className="w-full rounded-xl cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 px-4 py-2 bg-white text-black rounded-full"
        >
          ↑ Top
        </button>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={close}
          >
            <motion.img
              src={images[currentIndex]}
              className="max-w-[90%] max-h-[90%]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />

            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6">←</button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6">→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}