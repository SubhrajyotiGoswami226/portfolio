"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  // Always start at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById("work");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white">

      {/* LANDING */}
      <section className="h-screen snap-start flex flex-col items-center justify-center relative">

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold z-10 text-center"
        >
          Subhrajyoti Goswami
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-400 z-10 text-center"
        >
          Building Digital Experiences & Visual Stories
        </motion.p>

        <motion.button
          onClick={scrollToWork}
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full z-10 active:scale-95"
        >
          Explore My Work
        </motion.button>

        <div className="absolute bottom-6 text-sm text-gray-500 animate-bounce">
          ↓ Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="h-screen snap-start flex items-center justify-center px-6">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/me.jpg"
              alt="me"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 max-h-[400px] overflow-y-auto pr-2 text-center md:text-left">

            <h2 className="text-3xl md:text-4xl font-semibold">
              About Me
            </h2>

            <p className="mt-4 text-gray-400">
              I am a passionate developer and visual storyteller who blends
              technology with creativity. From building modern web applications
              to capturing cinematic visuals through photography and videography,
              I aim to create experiences that leave an impact.
            </p>

            <p className="mt-4 text-gray-500">
              I focus on clean design, smooth interactions, and meaningful user
              experiences.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">

              <a
                href="https://www.instagram.com/thatfatguy.mov/"
                target="_blank"
                className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                Instagram
              </a>

              <a
                href="https://github.com/SubhrajyotiGoswami226"
                target="_blank"
                className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* SPLIT */}
      <section id="work" className="h-screen snap-start flex">

        {/* PHOTO */}
        <div
          onClick={() => router.push("/photo")}
          className="relative w-1/2 hover:w-[60%] transition-all duration-500 group cursor-pointer overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition"
            style={{ backgroundImage: "url('/photo.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold bg-black/40 px-4 py-2 rounded-lg">
              Photography
            </h2>
          </div>
        </div>

        {/* DEV */}
        <div
          onClick={() => router.push("/dev")}
          className="relative w-1/2 hover:w-[60%] transition-all duration-500 group cursor-pointer overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition"
            style={{ backgroundImage: "url('/dev.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition" />
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold bg-black/40 px-4 py-2 rounded-lg">
              Development
            </h2>
          </div>
        </div>

      </section>

      {/* CONTACT */}
      <section className="h-screen snap-start flex items-center justify-center px-6">

        <div className="w-full max-w-3xl p-8 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-lg">

          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Work With Me
          </h2>

          <p className="text-gray-400 text-center mt-2">
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
            className="mt-8 flex flex-col gap-4"
          >

            <input
              name="name"
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-white/30"
            />

            <select
              name="service"
              required
              className="px-4 py-3 rounded-lg bg-black border border-white/20 text-white outline-none appearance-none focus:border-white/40"
            >
              <option value="" className="bg-black text-white">
                Select Service
              </option>
              <option value="Photography / Videography" className="bg-black text-white">
                Photography / Videography
              </option>
              <option value="Web Development" className="bg-black text-white">
                Web Development
              </option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10"
            />

            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-full bg-white text-black hover:scale-105 transition"
            >
              Send via WhatsApp
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}