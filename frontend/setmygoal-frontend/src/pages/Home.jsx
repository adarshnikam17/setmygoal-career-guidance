import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          Set<span className="text-yellow-300">My</span>Goal
        </h1>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-gray-200"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
          >
            Register
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Discover Your <br />
          <span className="text-yellow-300">Perfect Career Path</span>
        </h2>

        <p className="mt-6 text-xl max-w-2xl mx-auto opacity-90">
          Personalized career guidance for students from school to graduation.
          Choose the right path based on your interests, strengths, and goals.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="mt-10 px-10 py-4 bg-white text-indigo-700 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition"
        >
          Get Started Free
        </button>
      </section>

      {/* CAREER CARDS */}
      <section className="grid md:grid-cols-3 gap-8 px-10 mt-32 pb-20">
        {[
          {
            title: "School Students",
            desc: "Confused after 7th–10th? We guide you towards the right stream."
          },
          {
            title: "11th & 12th",
            desc: "Explore exams, colleges, and career options after 12th."
          },
          {
            title: "Graduates",
            desc: "Skill roadmap, job roles, and future career planning."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl p-8 shadow-2xl hover:-translate-y-2 transition"
          >
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-8 opacity-80">
        © 2025 SetMyGoal • Career Guidance Platform
      </footer>
    </div>
  );
}
