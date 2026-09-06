"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const posts = [
  {
    id: "DFiZfT7TRUe",
    url: "https://www.instagram.com/p/DFiZfT7TRUe/",
  },
  {
    id: "DOvHFUTD4Tt",
    url: "https://www.instagram.com/p/DOvHFUTD4Tt/",
  },
  {
    id: "DUlD1Z2j9R-",
    url: "https://www.instagram.com/p/DUlD1Z2j9R-/",
  },
  {
    id: "DQ1VPr4jzGr",
    url: "https://www.instagram.com/p/DQ1VPr4jzGr/",
  },
  {
    id: "DXLlJaqD0DC",
    url: "https://www.instagram.com/p/DXLlJaqD0DC/",
  },
  {
    id: "DW3oD_Yj1PR",
    url: "https://www.instagram.com/p/DW3oD_Yj1PR/",
  },
];

function LazyInstagramPost({
  post,
  index,
}: {
  post: (typeof posts)[number];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
      }}
      className="group"
    >
      {/* POST LABEL */}
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Post {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-6 bg-white/10" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Featured
          </span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
        >
          Open
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      </div>

      {/* INSTAGRAM CARD */}
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0a0a] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
        <div
          ref={containerRef}
          className="relative min-h-[620px] bg-[#080808]"
        >
          {!shouldLoad && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <div className="h-4 w-4 animate-pulse rounded-full bg-white/25" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Loading post
                </span>
              </div>
            </div>
          )}

          {shouldLoad && (
            <iframe
              src={`https://www.instagram.com/p/${post.id}/embed/?hidecaption=false`}
              title={`Instagram post ${index + 1}`}
              loading="lazy"
              allow="fullscreen"
              className="block h-[620px] w-full border-0"
            />
          )}
        </div>

        {/* CARD FOOTER */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#080808] px-4 py-4">
          <div>
            <p className="text-xs font-medium text-white">
              thatfatguy.mov
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/25">
              Photography / Visual Stories
            </p>
          </div>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/50 transition hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
          >
            View post
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function PhotoPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* NAVIGATION */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-xl">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} />

            <span className="hidden sm:block">
              Back to home
            </span>
          </button>

          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
            Photography
          </span>

          <a
            href="https://www.instagram.com/thatfatguy.mov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:border-white/20 hover:text-white"
          >
            <span className="text-[10px] font-semibold">
              IG
            </span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
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
                  duration: 0.5,
                }}
                className="mb-6 text-xs uppercase tracking-[0.35em] text-white/30"
              >
                01 / Photography
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                }}
                className="max-w-5xl text-6xl font-medium leading-[0.88] tracking-[-0.065em] md:text-9xl"
              >
                Moments
                <span className="text-white/25">
                  {" "}
                  in frames.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="pb-2"
            >
              <p className="max-w-md text-sm leading-7 text-white/40">
                Selected work from my photography page,
                presented directly through Instagram.
              </p>

              <a
                href="https://www.instagram.com/thatfatguy.mov/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-fit items-center gap-3 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                  IG
                </span>

                @thatfatguy.mov

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.25em] text-white/20">
            <span>Selected work</span>
            <span>06 posts</span>
            <span className="hidden md:block">
              Scroll to explore ↓
            </span>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                02 / Featured
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                Selected from Instagram
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/25">
              The posts are live Instagram embeds, so the original
              likes, comments, carousel behavior and post details
              remain intact.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {posts.map((post, index) => (
              <LazyInstagramPost
                key={post.id}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/8 px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/25">
                03 / More
              </p>

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-8xl">
                More frames.
                <span className="block text-white/25">
                  More stories.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-md text-sm leading-7 text-white/35">
                These are a few selected posts. The complete visual
                archive lives on Instagram.
              </p>

              <a
                href="https://www.instagram.com/thatfatguy.mov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
              >
                Visit Instagram

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-white/20 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Subhrajyoti Goswami
          </span>

          <span>Photography / Visual Stories</span>
        </div>
      </footer>
    </main>
  );
}