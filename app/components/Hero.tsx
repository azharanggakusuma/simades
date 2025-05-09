"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white lg:h-screen flex items-center">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-balance">
            Sistem Informasi Manajemen Data Desa <br />
            <span className="relative inline-block text-indigo-600">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-indigo-300 rounded-sm"></span>
              <span className="relative z-10">SIMADES</span>
            </span>{" "}
            Kab. Cirebon
          </h1>

          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            SIMADES hadir untuk mempermudah desa dalam mengisi berbagai data desa secara terpusat, cepat, dan efisien.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 transition"
              href="/dashboard"
            >
            Dashboard
            </a>

            <a
              className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow hover:bg-gray-100 transition"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Animated Image Section */}
        <motion.div
          className="hidden md:block mx-auto max-w-md scale-105"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/img/hero.png"
            alt="Ilustrasi Sistem SIMADES"
            width={550}
            height={550}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
