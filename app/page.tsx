"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById("work");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (path: string) => {
    setLoading(true);
    setTarget(path);

    setTimeout(() => {
      router.push(path);
    }, 800);
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white">

      {/* LANDING */}
      <section className="h-screen snap-start flex flex-col items-center justify-center relative px-4">

        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-10 left-10"></div>
        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold text-center leading-tight"
        >
          Subhrajyoti Goswami
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-400 text-center px-2"
        >
          Building Digital Experiences & Visual Stories
        </motion.p>

        <motion.button
          onClick={scrollToWork}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-white text-black rounded-full"
        >
          Explore My Work
        </motion.button>

        <div className="absolute bottom-6 text-sm text-gray-500 animate-bounce">
          ↓ Scroll
        </div>

        <div className="md:hidden mt-4 text-sm text-gray-500 animate-pulse">
          Tap to explore ↓
        </div>

      </section>

      {/* ABOUT */}
      <section className="h-screen snap-start flex items-center justify-center px-4 md:px-6">

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-10 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition">

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/me.jpg"
              alt="me"
              width={400}
              height={400}
              className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="w-full md:w-1/2 max-h-[300px] md:max-h-[400px] overflow-y-auto text-center md:text-left">

            <h2 className="text-2xl md:text-4xl font-semibold">
              About Me
            </h2>

            <p className="mt-4 text-gray-400 text-sm md:text-base">
              I am a passionate developer and visual storyteller who blends
              technology with creativity. From building modern web applications
              to capturing cinematic visuals, I aim to create impactful experiences.
            </p>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Clean design, smooth interactions, and meaningful user experiences.
            </p>

            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">

              <a
                href="https://www.instagram.com/thatfatguy.mov/"
                target="_blank"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                Instagram
              </a>

              <a
                href="https://github.com/SubhrajyotiGoswami226"
                target="_blank"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SPLIT */}
      <section id="work" className="h-screen snap-start flex flex-col md:flex-row">

        {/* PHOTO */}
        <div
          onClick={() => handleNavigate("/photo")}
          className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer overflow-hidden group active:scale-95 transition"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
            style={{ backgroundImage: "url('/photo.jpg')" }}
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />

          <div className="relative h-full flex flex-col items-center justify-center gap-2">

            <motion.h2
              whileTap={{ scale: 0.9 }}
              className="text-2xl md:text-5xl font-semibold text-center bg-black/40 px-4 py-2 rounded-lg"
            >
              Photography
            </motion.h2>

            <motion.span
              className="text-gray-400 text-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ↗
            </motion.span>

          </div>
        </div>

        {/* DEV */}
        <div
          onClick={() => handleNavigate("/dev")}
          className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer overflow-hidden group active:scale-95 transition"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
            style={{ backgroundImage: "url('/dev.jpg')" }}
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />

          <div className="relative h-full flex flex-col items-center justify-center gap-2">

            <motion.h2
              whileTap={{ scale: 0.9 }}
              className="text-2xl md:text-5xl font-semibold text-center bg-black/40 px-4 py-2 rounded-lg"
            >
              Development
            </motion.h2>

            <motion.span
              className="text-gray-400 text-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ↗
            </motion.span>

          </div>
        </div>

      </section>

      {/* CONTACT */}
      <section className="h-screen snap-start flex items-center justify-center px-4 md:px-6">

        <div className="w-full max-w-3xl p-6 md:p-8 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-lg">

          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Work With Me
          </h2>

          <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
            Have a project in mind? Let’s make it happen.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = (e.target as any).name.value;
              const service = (e.target as any).service.value;
              const message = (e.target as any).message.value;

              const text = `Hello, my name is ${name}. I am interested in ${service}. ${message}`;

              const url = `https://wa.me/917099050019?text=${encodeURIComponent(text)}`;

              window.open(url, "_blank");
            }}
            className="mt-6 flex flex-col gap-4"
          >

            <input
              name="name"
              required
              placeholder="Your Name"
              className="px-4 py-4 md:py-3 text-base rounded-lg bg-white/10 border border-white/10 outline-none"
            />

            <div className="relative">
              <select
                name="service"
                required
                className="w-full px-4 py-4 md:py-3 text-base rounded-lg bg-black border border-white/20 text-white appearance-none"
              >
                <option value="">Select Service</option>
                <option value="Photography / Videography">Photography / Videography</option>
                <option value="Web Development">Web Development</option>
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                ▼
              </div>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="px-4 py-4 md:py-3 text-base rounded-lg bg-white/10 border border-white/10"
            />

            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-full bg-white text-black hover:scale-105 active:scale-95 transition"
            >
              Send via WhatsApp
            </button>

          </form>

        </div>

      </section>

      {/* LOADING SCREEN */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >

            <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

            <p className="text-sm text-gray-400">
              Loading {target === "/photo" ? "Photography" : "Development"}...
            </p>

          </motion.div>
        </motion.div>
      )}

    </main>
  );
}