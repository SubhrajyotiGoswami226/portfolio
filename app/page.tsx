"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState("");

  const navigate = (path: string) => {
    setLoading(path);

    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="snap-page noise min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* NAV */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-5">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-sm font-semibold tracking-tight"
          >
            SG<span className="text-white/30">.</span>
          </button>

          <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-white/45 md:flex">
            <button
              onClick={() => scrollTo("about")}
              className="transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("work")}
              className="transition hover:text-white"
            >
              Work
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="transition hover:text-white"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-[1.03]"
          >
            Let&apos;s Talk

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="snap-section relative flex items-center overflow-hidden px-5 pb-20 pt-28 md:px-8">
        <div className="grid-bg absolute inset-0 opacity-60" />

        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-indigo-400/[0.035] blur-[140px]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-white/40"
            >
              Developer · Photographer · Visual Storyteller
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-balance text-[15vw] font-semibold leading-[0.82] tracking-[-0.07em] md:text-[9rem]"
            >
              Subhrajyoti
              <span className="block text-white/35">
                Goswami.
              </span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-xl text-base leading-7 text-white/45 md:text-lg">
                I build digital experiences and capture visual
                stories with a focus on clarity, character and
                detail.
              </p>

              <button
                onClick={() => scrollTo("about")}
                className="group flex w-fit items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                Explore

                <ArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 hidden items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/25 md:flex">
            <span>Based in India</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="snap-section flex items-center border-t border-white/8 px-5 py-20 md:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">
              01 / About
            </p>

            <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Technology meets visual storytelling.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/55 md:text-xl">
              I am a developer and visual storyteller who enjoys
              working between technology and creativity. From web
              applications to cinematic imagery, my goal is simple:
              make things that feel intentional.
            </p>

            <p className="mt-7 text-base leading-7 text-white/30">
              Clean interfaces. Thoughtful interactions. Strong
              visual direction. No unnecessary noise.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/thatfatguy.mov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
              >
                Instagram

                <ArrowUpRight
                  size={13}
                  className="opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/SubhrajyotiGoswami226"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
              >
                GitHub

                <ArrowUpRight
                  size={13}
                  className="opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="snap-section flex items-center border-t border-white/8 px-5 py-20 md:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">
                02 / Selected Work
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                Two sides of the same brain.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              Development and photography are different mediums,
              but both are driven by the same obsession with detail.
            </p>
          </div>

          <div className="grid max-h-[62vh] overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2">
            {/* PHOTO */}
            <motion.button
              onClick={() => navigate("/photo")}
              whileHover="hover"
              className="group relative min-h-[300px] overflow-hidden border-b border-white/10 text-left md:min-h-[500px] md:border-b-0 md:border-r"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/photo.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/25" />

              <motion.div
                variants={{
                  hover: {
                    y: -5,
                  },
                }}
                className="relative flex h-full flex-col justify-between p-7 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] backdrop-blur-md">
                    Visual stories
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-md">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-sm text-white/60">
                    01
                  </p>

                  <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                    Photography
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                    Frames, light, landscapes and moments that
                    deserve to be remembered.
                  </p>
                </div>
              </motion.div>
            </motion.button>

            {/* DEVELOPMENT */}
            <motion.button
              onClick={() => navigate("/dev")}
              whileHover="hover"
              className="group relative min-h-[300px] overflow-hidden text-left md:min-h-[500px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/dev.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/30" />

              <motion.div
                variants={{
                  hover: {
                    y: -5,
                  },
                }}
                className="relative flex h-full flex-col justify-between p-7 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] backdrop-blur-md">
                    Digital experiences
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-md">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-sm text-white/60">
                    02
                  </p>

                  <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                    Development
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                    Responsive websites and applications designed
                    around people, performance and purpose.
                  </p>
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="snap-section flex items-center border-t border-white/8 px-5 py-20 md:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-14 md:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">
                03 / Contact
              </p>

              <h2 className="max-w-3xl text-5xl font-medium tracking-[-0.055em] md:text-8xl">
                Have something
                <span className="block text-white/30">
                  worth building?
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="max-w-md text-base leading-7 text-white/40">
                Tell me what you are working on. I&apos;ll get back
                to you and we can figure out the next step.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const data = new FormData(form);

                  const name = String(
                    data.get("name") || ""
                  );

                  const service = String(
                    data.get("service") || ""
                  );

                  const message = String(
                    data.get("message") || ""
                  );

                  const text = `Hello, my name is ${name}. I am interested in ${service}. ${message}`;

                  window.open(
                    `https://wa.me/917099050019?text=${encodeURIComponent(
                      text
                    )}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="mt-8 space-y-3"
              >
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm outline-none placeholder:text-white/20 transition focus:border-white/25"
                />

                <select
                  required
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-[#090909] px-5 py-4 text-sm text-white/60 outline-none transition focus:border-white/25"
                >
                  <option value="" disabled>
                    What can I help with?
                  </option>

                  <option value="Photography / Videography">
                    Photography / Videography
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>
                </select>

                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm outline-none placeholder:text-white/20 transition focus:border-white/25"
                />

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Start a conversation

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.25em] text-white/20 md:flex-row">
            <span>
              © {new Date().getFullYear()} Subhrajyoti Goswami
            </span>

            <span>Designed & built with intention</span>

            <a
              href="mailto:"
              className="flex items-center gap-2 transition hover:text-white/50"
            >
              <Mail size={12} />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* PAGE TRANSITION */}
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="text-center"
          >
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border border-white/15 border-t-white" />

            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}