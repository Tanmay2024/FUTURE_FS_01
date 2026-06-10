// src/components/Hero.jsx

import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl font-bold"
            >
                Tanmay Guruvugari
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-400 mt-4"
            >
                <p className="text-xl text-gray-400 mt-4">
                    Building Full Stack Applications and AI Solutions
                </p>

                <p className="text-lg text-gray-500 mt-2">
                    Computer Science Student at SRM Institute of Science and Technology
                </p>
            </motion.p>

            <div className="mt-8 flex gap-4">

                <a
                    href="#projects"
                    className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold"
                >
                    View Projects
                </a>

                <a
                    href="/Resume Tanmay.pdf"
                    download
                    className="border border-cyan-500 px-6 py-3 rounded-lg"
                >
                    Download Resume
                </a>

            </div>

        </section>
    );
}

export default Hero;