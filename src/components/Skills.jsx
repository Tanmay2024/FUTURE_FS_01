function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C++"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Oracle", "Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-8 py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
              bg-slate-800
              rounded-2xl
              p-8
              border
              border-slate-700
              hover:scale-105
              hover:shadow-cyan-500/20
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                    bg-slate-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;