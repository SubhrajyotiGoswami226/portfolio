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
    title: "Artifex",
    subtitle: "Museum Audio Guide",
    description:
      "An immersive digital guide system enhancing museum experiences through audio storytelling.",
    tech: ["Frontend", "UI/UX"],
    live: "https://artifex-museum-companion.vercel.app/",
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
      className={`min-h-screen transition-colors duration-500 ${pageBg}`}
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
            onClick={() => setDarkMode((value) => !value)}
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
      <section className="px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl">
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
              interfaces I have built with a focus on usability,
              performance and visual identity.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={`border-t ${border}`}>
        <div className="mx-auto max-w-7xl">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
              }}
              className={`grid gap-8 border-b px-5 py-14 md:grid-cols-[110px_1fr_0.75fr] md:gap-10 md:px-8 md:py-20 ${border}`}
            >
              <div className={`text-xs ${muted}`}>
                {project.number}
              </div>

              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
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

              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                    {project.title}
                  </h2>

                  <p className={`mt-2 text-sm ${muted}`}>
                    {project.subtitle}
                  </p>

                  <p className={`mt-7 text-sm leading-7 ${muted}`}>
                    {project.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="mb-7 flex flex-wrap gap-2">
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
                    className="group flex w-fit items-center gap-3 text-sm font-medium"
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className={`text-xs uppercase tracking-[0.2em] ${muted}`}
          >
            Back to top ↑
          </button>

          <a
            href="https://github.com/SubhrajyotiGoswami226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs"
          >
            GitHub
            <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
    </main>
  );
}