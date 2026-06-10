import pentathon from "../assets/pentathon.jpg";
import codeobjects from "../assets/codeobjects.jpg";

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Achievements & Certifications
        </h2>

        {/* Competitions */}
        <h3 className="text-2xl font-semibold mb-6">
          🏆 Competitions & Achievements
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div
            className="
            bg-slate-800
            rounded-2xl
            overflow-hidden
            border
            border-slate-700
            hover:scale-105
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            <img
              src={pentathon}
              alt="Pentathon"
              className="w-full h-52 object-contain bg-slate-900"
            />

            <div className="p-6">
              <h4 className="text-xl font-bold">
                Pentathon 2.0 & HackStreet 3.0
              </h4>

              <p className="text-cyan-400 mt-2">
                Final Round Participant
              </p>

              <p className="text-gray-400 mt-3">
                Organized by NextGen AI at SRM Institute of Science and Technology.
              </p>
            </div>
          </div>

          <div
            className="
            bg-slate-800
            rounded-2xl
            overflow-hidden
            border
            border-slate-700
            hover:scale-105
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            <img
              src={codeobjects}
              alt="Code In Objects"
              className="w-full h-52 object-contain bg-slate-900"
            />

            <div className="p-6">
              <h4 className="text-xl font-bold">
                Code in Objects Challenge
              </h4>

              <p className="text-cyan-400 mt-2">
                Participation Certificate
              </p>

              <p className="text-gray-400 mt-3">
                Organized by SRM School of Computing.
              </p>
            </div>
          </div>

        </div>

        {/* Certifications */}
        <h3 className="text-2xl font-semibold mb-6">
          📜 Professional Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div
            className="
            bg-slate-800
            p-6
            rounded-2xl
            border
            border-slate-700
            hover:scale-105
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            <h4 className="text-xl font-bold">
              NPTEL Java Programming
            </h4>

            <p className="text-cyan-400 mt-2">
              Certified Course
            </p>

            <p className="text-gray-400 mt-3">
              Covered Java fundamentals, object-oriented programming concepts, and application development.
            </p>
          </div>

          <div
            className="
            bg-slate-800
            p-6
            rounded-2xl
            border
            border-slate-700
            hover:scale-105
            hover:shadow-cyan-500/20
            transition-all
            duration-300
            "
          >
            <h4 className="text-xl font-bold">
              NPTEL Operating Systems
            </h4>

            <p className="text-cyan-400 mt-2">
              Certified Course
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;