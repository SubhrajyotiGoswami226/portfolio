"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    title: "Zola Adventures",
    subtitle: "Bike, Scooty & Car Rental Platform",
    description:
      "A premium rental platform offering bikes, scooties, and cars with a clean booking experience and modern UI.",
    tech: ["Next.js", "React", "Tailwind"],
    github: "#",
    live: "https://zola-adventures.netlify.app/",
    image: "/zola.jpg",
  },
  {
    title: "Orange Cabs",
    subtitle: "Cab Booking Website",
    description:
      "A streamlined cab booking platform focused on accessibility and smooth ride booking.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "https://orangecabs.in/",
    image: "/orange.jpg",
  },
  {
    title: "Edify ERP",
    subtitle: "Educational Management System",
    description:
      "A full ERP system for managing students, attendance, and academic workflows.",
    tech: ["Next.js", "Full Stack"],
    github: "#",
    live: "https://edify-erp-demo.vercel.app/",
    image: "/edify.jpg",
  },
  {
    title: "Artifex",
    subtitle: "Museum Audio Guide",
    description:
      "An immersive digital guide system enhancing museum experiences through audio storytelling.",
    tech: ["Frontend", "UI/UX"],
    github: "#",
    live: "https://artifex-museum-companion.vercel.app/",
    image: "/artifex.jpg",
  },
];

export default function DevPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [showNavTitle, setShowNavTitle] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const router = useRouter();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowNavTitle(y > 120);
      setShowTop(y > 300);
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

        <AnimatePresence>
          {!showNavTitle && (
            <>
              <motion.div className="absolute left-6">
                <div className="px-5 py-3 rounded-full border bg-[#0f0f0f] border-white/10">
                  <button onClick={() => router.push("/")}>
                    ← Back
                  </button>
                </div>
              </motion.div>

              <motion.div className="absolute right-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-[#0f0f0f] border-white/10">
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️" : "🌙"}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNavTitle && (
            <motion.div className="flex justify-center">
              <div className="flex items-center justify-between w-[380px] md:w-[440px] px-5 py-3 rounded-full border bg-[#0f0f0f] border-white/10">

                <button onClick={() => router.push("/")}>
                  ← Back
                </button>

                <span className="font-semibold">Development</span>

                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? "☀️" : "🌙"}
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        Development
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden border bg-white/5 border-white/10 backdrop-blur-lg hover:border-white/20 transition hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
          >

            {/* IMAGE */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-lg font-semibold">
                {project.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {project.subtitle}
              </p>

              <p className="mt-3 text-gray-400 text-sm">
                {project.description}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex gap-3">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
                  >
                    GitHub
                  </a>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-white text-black hover:scale-105 transition text-sm"
                >
                  Live
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* BACK TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-6 right-6 px-4 py-2 bg-white text-black rounded-full shadow-lg hover:scale-110 transition"
          >
            ↑ Top
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}