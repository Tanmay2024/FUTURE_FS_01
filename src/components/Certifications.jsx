function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              NPTEL Java Programming
            </h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              NPTEL Operating Systems
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;