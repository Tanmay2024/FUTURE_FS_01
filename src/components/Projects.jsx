function Projects() {
    const projects = [
        {
            title: "Subscription Fatigue Tracker",
            tech: "React • Node.js • MySQL",
            status: "Completed",
            description:
                "Smart subscription management platform to track active subscriptions, renewal dates, monthly spending, payment reminders, and subscription analytics.",
            github: "https://github.com/Tanmay2024/Subscription-Fatigue-Tracker",
            demo: "#",
        },

        {
            title: "SmartAgri AI",
            tech: "Python • TensorFlow • OpenCV",
            status: "Ongoing",
            description:
                "AI-powered agricultural assistant for crop disease detection, smart farming recommendations, crop monitoring, and yield improvement.",
            github: "https://github.com/Tanmay2024/SmartAgri-AI",
            demo: "#",
        },

        {
            title: "Student Analytics Dashboard",
            tech: "React • Node.js • MySQL",
            status: "Completed",
            description:
                "Interactive dashboard for managing student records, analyzing academic performance, visualizing data, and generating educational insights.",
            github: "https://github.com/Tanmay2024/student-analytics-dashboard",
            demo: "#",
        },

        {
            title: "SaaS Billing Portal",
            tech: "React • Node.js • MySQL",
            status: "Completed",
            description:
                "Subscription billing and customer management platform with invoice tracking, payment management, usage monitoring, and analytics dashboard.",
            github: "https://github.com/Tanmay2024/saas-billing-portal",
            demo: "#",
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

                                {project.github !== "#" ? (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                                    >
                                        GitHub
                                    </a>
                                ) : (
                                    <button
                                        className="bg-gray-600 px-4 py-2 rounded-lg cursor-not-allowed"
                                    >
                                        GitHub Soon
                                    </button>
                                )}

                                <button
                                    className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded-lg cursor-default"
                                >
                                    Demo Coming Soon
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