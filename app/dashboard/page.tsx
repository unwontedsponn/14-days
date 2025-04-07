import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DashboardPage() {
  const xp = 42
  const streak = 3
  const user = {
    name: "Ben",
    avatar: "/avatar-default.png", // Replace with user avatar later
  }

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border" />
          <div>
            <h1 className="text-2xl font-bold">Hi, {user.name} 👋</h1>
            <p className="text-gray-600 text-sm">Welcome back to your Brightr dashboard</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 bg-yellow-100 rounded-xl p-4 shadow-sm text-center">
            <p className="text-sm text-gray-600">Total XP</p>
            <p className="text-2xl font-bold text-yellow-800">{xp}</p>
          </div>
          <div className="flex-1 bg-orange-100 rounded-xl p-4 shadow-sm text-center">
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="text-2xl font-bold text-orange-800">{streak} days</p>
          </div>
          <div className="flex-1 bg-blue-100 rounded-xl p-4 shadow-sm text-center">
            <p className="text-sm text-gray-600">Learning Goal</p>
            <p className="text-lg font-semibold text-blue-800">10 mins/day</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Link href="/learn" className="block bg-green-100 p-6 rounded-xl shadow hover:bg-green-200 transition">
            <h3 className="text-lg font-semibold text-green-800 mb-2">📚 Resume Learning</h3>
            <p className="text-gray-700 text-sm">Pick up where you left off</p>
          </Link>
          <Link href="/learn/life" className="block bg-pink-100 p-6 rounded-xl shadow hover:bg-pink-200 transition">
            <h3 className="text-lg font-semibold text-pink-800 mb-2">🎯 Try a Mission</h3>
            <p className="text-gray-700 text-sm">Offline challenge or printable activity</p>
          </Link>
        </div>

        {/* Progress + Profile Settings */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-2">🔓 Badges & Progress</h4>
            <p className="text-sm text-gray-600 mb-2">(Coming soon) Track your streaks, badges and completed zones.</p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-2">👤 Profile Settings</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><Link href="#" className="hover:underline">Change name or avatar</Link></li>
              <li><Link href="#" className="hover:underline">Manage goals</Link></li>
              <li><Link href="#" className="hover:underline">View parent account</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
