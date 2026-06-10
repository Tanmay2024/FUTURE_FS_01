function Skills() {
    const skills = [
        "Java",
        "Python",
        "C++",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Oracle",
        "Git",
        "GitHub",
        "TensorFlow"
    ];

    return (
        <section
            id="skills"
            className="min-h-screen px-8 py-20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-cyan-400 mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 hover:bg-slate-700 hover:scale-105 transition-all duration-300 rounded-xl p-6 text-center text-lg font-semibold shadow-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;