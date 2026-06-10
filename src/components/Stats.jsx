function Stats() {
  const stats = [
    { value: "4+", label: "Projects" },
    { value: "8.6", label: "CGPA" },
    { value: "4+", label: "Hackathons" },
    { value: "2028", label: "Graduation" },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;