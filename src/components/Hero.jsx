import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Shaastra 2025
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-4 text-lg text-gray-600">
              India’s premier student-run tech festival. Competitions, workshops, lectures, and shows — all in one epic celebration of innovation.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#register" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Register Now</a>
              <a href="#events" className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">Explore Events</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Jan 2–5, 2025 • IIT Madras</p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center text-white">
                <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#2563eb,transparent_25%),radial-gradient(circle_at_70%_70%,#4f46e5,transparent_25%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
