function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-8"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-cyan-400 mb-8">
                    About Me
                </h2>

                <p className="text-lg text-gray-300 leading-8">
                    I am a Computer Science and Engineering student at
                    SRM Institute of Science and Technology with a strong
                    interest in Full Stack Development, Artificial Intelligence,
                    and software engineering.

                    I enjoy building real-world applications that solve
                    practical problems, from subscription management systems
                    to AI-powered agriculture solutions. I am continuously
                    learning new technologies and improving my development
                    skills through projects, hackathons, and open-source
                    contributions.
                </p>
            </div>
        </section>
    );
}

export default About;