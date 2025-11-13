export default function Events() {
  const items = [
    { title: 'Robotics Challenge', desc: 'Build and battle autonomous robots.', tag: 'Competition' },
    { title: 'Hackathon', desc: '48 hours of code, creativity, and coffee.', tag: 'Competition' },
    { title: 'AI Workshop', desc: 'Hands-on with modern ML stacks.', tag: 'Workshop' },
    { title: 'Aero Modeling', desc: 'Design and fly your own RC aircraft.', tag: 'Workshop' },
    { title: 'Guest Lectures', desc: 'Talks by pioneers and industry leaders.', tag: 'Lecture' },
    { title: 'Envisage', desc: 'Shaastra’s flagship techno-entertainment show.', tag: 'Show' },
  ]
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Highlights</h2>
        <p className="mt-2 text-gray-600">A snapshot of what’s in store.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">{it.tag}</span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
