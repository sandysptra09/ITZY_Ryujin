import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className="relative">
      <Navbar />

      <section
        className="relative h-screen flex flex-col items-start justify-center text-left text-white px-6 md:px-12"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/8273686.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute"></div>

        <div className="z-10">
          <motion.h2
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Ryujin
          </motion.h2>

          <motion.p
            className={`${styles.heroSubText} mt-4 text-lg md:text-xl text-gray-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Celebrate the charisma of Ryujin with ITZY's newest hits! <br />
            Stay updated with the latest tracks and content.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="px-6 py-3 border-2 border-white text-white hover:bg-pink-500 hover:text-white font-semibold shadow-lg transition-all transform hover:scale-105">
              Explore Now
            </button>
          </motion.div>

          <motion.div
            className="mt-10 flex space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {["spotify", "instagram", "youtube", "twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white text-3xl hover:text-pink-500 transition duration-300"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
