import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="min-h-screen px-8 py-20">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold text-cyan-400 mb-12">
                    Contact
                </h2>

                <div className="bg-slate-800 p-8 rounded-2xl">

                    <h3 className="text-2xl font-semibold mb-6">
                        Let's Connect
                    </h3>

                    <div className="space-y-4">

                        <a
                            href="mailto:tanmayguruvugari2007@gmail.com"
                            className="flex items-center gap-3 text-lg hover:text-cyan-400"
                        >
                            <FaEnvelope />
                            tanmayguruvugari2007@gmail.com
                        </a>

                        <a
                            href="https://github.com/Tanmay2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg hover:text-cyan-400"
                        >
                            <FaGithub />
                            github.com/Tanmay2024
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tanmay-guruvugari-480b71355"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg hover:text-cyan-400"
                        >
                            <FaLinkedin />
                            linkedin.com/in/tanmay-guruvugari-480b71355
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;