function Projects() {
    const projects = [
        {
            title: "Subscription Fatigue Tracker",
            tech: "React • Node.js • MySQL",
            status: "Completed",
            description:
                "A smart subscription management platform to track active subscriptions, renewal dates, and monthly spending.",
        },
        {
            title: "SmartAgri AI",
            tech: "Python • TensorFlow • OpenCV",
            status: "Ongoing",
            description:
                "AI-powered agricultural assistant for crop disease detection and smart farming recommendations.",
        },
        {
            title: "Student Enrollment Management System",
            tech: "Java • Oracle • HTML",
            status: "Completed",
            description:
                "Web-based system for managing student enrollment with CRUD operations and Oracle database integration.",
        },
        {
            title: "Exam Result Management System",
            tech: "Java • Oracle • HTML",
            status: "Completed",
            description:
                "System for managing student results with automated calculations and secure record maintenance.",
        },
    ];

    return (
        <section id="projects" className="min-h-screen px-8 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-cyan-400 mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300"                        >
                            <h3 className="text-2xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-cyan-400 mb-3">
                                {project.tech}
                            </p>

                            <span
                                className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${project.status === "Completed"
                                    ? "bg-green-600"
                                    : "bg-yellow-600"
                                    }`}
                            >
                                {project.status}
                            </span>

                            <p className="text-gray-300">
                                {project.description}
                            </p>

                            <div className="mt-6 flex gap-4">
                                <button className="bg-cyan-500 px-4 py-2 rounded-lg">
                                    GitHub
                                </button>

                                <button className="border border-cyan-500 px-4 py-2 rounded-lg">
                                    Demo
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;