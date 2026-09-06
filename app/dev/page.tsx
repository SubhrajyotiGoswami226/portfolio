"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Zola Adventures",
    subtitle: "Bike, Scooty & Car Rental Platform",
    description:
      "A premium rental platform offering bikes, scooties, and cars with a clean booking experience and modern UI.",
    tech: ["Next.js", "React", "Tailwind"],
    live: "https://zola-adventures.netlify.app/",
    image: "/zola.jpg",
  },
  {
    number: "02",
    title: "Orange Cabs",
    subtitle: "Cab Booking Website",
    description:
      "A streamlined cab booking platform focused on accessibility and smooth ride booking.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://orangecabs.in/",
    image: "/orange.jpg",
  },
  {
    number: "03",
    title: "Edify ERP",
    subtitle: "Educational Management System",
    description:
      "A full ERP system for managing students, attendance, and academic workflows.",
    tech: ["Next.js", "Full Stack"],
    live: "https://edify-erp-demo.vercel.app/",
    image: "/edify.jpg",
  },
  {
    number: "04",
    title: "Assam Manuscript Archive",
    subtitle: "Digital Preservation Platform",
    description:
      "A comprehensive platform for digitizing and preserving Assam's rich cultural heritage.",
    tech: ["Next.js", "React", "Tailwind"],
    live: "https://assammanuscriptarchive.com/",
    image: "/artifex.jpg",
  },
];

export default function DevPage() {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pageBg = darkMode
    ? "bg-[#050505] text-white"
    : "bg-[#f5f5f5] text-black";

  const border = darkMode
    ? "border-white/10"
    : "border-black/10";

  const muted = darkMode
    ? "text-white/40"
    : "text-black/45";

  return (
    <main
      className={`snap-page min-h-screen transition-colors duration-500 ${pageBg}`}
    >
      {/* NAV */}
      <div className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <motion.div
          animate={{
            y: showNav ? 0 : -5,
            scale: showNav ? 1 : 0.98,
          }}
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl ${
            darkMode
              ? "border-white/10 bg-black/70"
              : "border-black/10 bg-white/75"
          }`}
        >
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={16} />

            <span className="hidden sm:block">
              Back to home
            </span>
          </button>

          <span className="text-xs font-semibold uppercase tracking-[0.25em]">
            Development
          </span>

          <button
            onClick={() =>
              setDarkMode((value) => !value)
            }
            aria-label="Toggle theme"
            className={`flex h-9 w-9 items-center justify-center rounded-full border ${border}`}
          >
            {darkMode ? (
              <Sun size={15} />
            ) : (
              <Moon size={15} />
            )}
          </button>
        </motion.div>
      </div>

      {/* HERO */}
      <section className="snap-section flex items-center px-5 pb-20 pt-32 md:px-8 md:pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <p
            className={`mb-6 text-xs uppercase tracking-[0.35em] ${muted}`}
          >
            01 / Development
          </p>

          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] md:text-9xl"
            >
              Digital work
              <span
                className={
                  darkMode
                    ? "text-white/25"
                    : "text-black/20"
                }
              >
                {" "}
                with purpose.
              </span>
            </motion.h1>

            <p
              className={`max-w-md pb-2 text-sm leading-7 ${muted}`}
            >
              A collection of web experiences, platforms and
              interfaces built with a focus on usability,
              performance and visual identity.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {projects.map((project) => (
        <section
          key={project.title}
          className={`snap-section flex items-center border-t px-5 py-20 md:px-8 ${border}`}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[80px_1fr_0.75fr] md:gap-10">
            <div
              className={`pt-1 text-xs md:pt-2 ${muted}`}
            >
              {project.number}
            </div>

            <div className="flex items-center">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p
                className={`mb-2 text-xs uppercase tracking-[0.2em] ${muted}`}
              >
                Development project
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                {project.title}
              </h2>

              <p className={`mt-2 text-sm ${muted}`}>
                {project.subtitle}
              </p>

              <p
                className={`mt-7 max-w-md text-sm leading-7 ${muted}`}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] ${border}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex w-fit items-center gap-3 text-sm font-medium"
              >
                Visit live project

                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${border}`}
                >
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <section
        className={`snap-section flex items-center border-t px-5 py-16 md:px-8 ${border}`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className={`text-xs uppercase tracking-[0.3em] ${muted}`}>
            06 / End
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-8xl">
              More ideas.
              <span className="block text-white/25">
                More things to build.
              </span>
            </h2>

            <button
              onClick={() => router.push("/")}
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Back to portfolio

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <div className="mt-16 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.25em] text-white/20">
            © {new Date().getFullYear()} Subhrajyoti Goswami
          </div>
        </div>
      </section>
    </main>
  );
}