import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        
        {/* Hero / Identity */}
        <section className="text-center px-6 py-24 bg-[#F9FAFB] border-b border-gray-100">
        <h1 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight">14 Days</h1>

        <p className="prose-content text-center mb-6">
          Short, joyful courses that build real-world fluency.
        </p>
          <p className="text-md max-w-2xl mx-auto text-gray-500 mb-8 leading-relaxed">
            Learn fast. Play early. Grow confidence — one 14-day challenge at a time.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
          <Link href="/learn" className="btn-primary">
    🚀 Explore Courses
  </Link>

  <Link href="/dashboard" className="btn-outline">
    👪 Parent Dashboard
  </Link>

          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-24 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold text-[#1D4ED8] mb-12">🧠 The 14 Days Method</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-left text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Fluency Beats Perfection</h3>
              <p>
                In music, language, and life — fluency means you can improvise, play, and express yourself. You don’t need to be an expert. You just need to start.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Learning Should Feel Like Play</h3>
              <p>
                No exams. No pressure. Just creative tasks, printable prompts, and real-world challenges. XP over grades.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Own the Journey</h3>
              <p>
                Earn XP toward your 14 Day Bond — your own savings pot for creative goals and future learning.
              </p>
            </div>
          </div>
        </section>

        {/* Learn to Earn */}
        <section className="py-20 px-6 bg-[#F3F4F6] text-center border-y border-gray-100">
          <h2 className="text-3xl font-bold text-[#1D4ED8] mb-4">💰 Learn to Earn — the human way</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            As you learn, you earn XP. That XP builds your 14 Day Bond — a fund for future creativity and self-investment.
          </p>
          <p className="text-sm text-gray-400 italic">
            No crypto. No catch. Just joyful learning with meaningful rewards.
          </p>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">🎯 Learn What Matters</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Courses that teach real, creative, confidence-building skills — like composing, cooking, and critical thinking.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🎮 XP + Real-World Missions</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Learn through doing — with printables, projects, and story-based quests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🌱 Your Personal Progress Fund</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                XP turns into 14 Day Bonds — your future reward pot, powered by your own learning.
              </p>
            </div>
          </div>
        </section>

        {/* Why 14 Days */}
        <section className="py-20 px-6 text-center bg-[#F9FAFB] border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⏱️ Why 14 Days?</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Two weeks is enough to try something new, build momentum, and feel proud. No fluff. No overwhelm. Just real progress.
          </p>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 text-center bg-white">
          <h2 className="text-3xl font-bold mb-4">🎉 Want Early Access?</h2>
          <p className="mb-8 text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Join the waitlist and be the first to explore our joyful beta — built for creators, home learners, and curious minds.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-[#3E7BFA] text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-md"
          >
            Join the Waitlist
          </Link>
        </section>
      </div>
      <Footer/>
    </>
  );
}
