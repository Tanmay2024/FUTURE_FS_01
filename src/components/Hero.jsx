import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <section className="min-h-screen flex items-center px-8">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-cyan-400 text-lg mb-2">
                        Hi, I'm
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold">
                        Tanmay Guruvugari
                    </h1>

                    <div className="text-2xl md:text-3xl text-gray-300 mt-4 h-12">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "AI Enthusiast",
                                2000,
                                "Problem Solver",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 mt-6 text-lg">
                        Building Full Stack Applications and AI Solutions.
                    </p>

                    <p className="text-gray-500 mt-2">
                        Computer Science Student at SRM Institute of Science and Technology
                    </p>

                    <div className="mt-8 flex gap-4">

                        <a
                            href="#projects"
                            className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold"
                        >
                            View Projects
                        </a>

                        <a
                            href="/Resume_Tanmay.pdf"
                            download
                            className="border border-cyan-500 px-6 py-3 rounded-lg"
                        >
                            Download Resume
                        </a>

                    </div>

                    <div className="flex gap-6 mt-8 text-3xl">

                        <a
                            href="https://github.com/Tanmay2024"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-400"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tanmay-guruvugari-480b71355"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-cyan-400"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex justify-center">
                    <img
                        src={profile}
                        alt="Pass photo.JPG"
                        className="
                                   w-80
                                   h-80
                                   object-cover
                                   rounded-full
                                   border-4F
                                   border-cyan-500
                                   shadow-[0_0_40px_rgba(6,182,212,0.4)]
                                 "
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;