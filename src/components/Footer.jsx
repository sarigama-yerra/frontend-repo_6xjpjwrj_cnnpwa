export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-lg font-bold">Shaastra</span>
          </div>
          <p className="mt-3 text-gray-600">IIT Madras’ annual tech festival, run entirely by students.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li><a href="#events" className="hover:text-blue-600">Events</a></li>
            <li><a href="#workshops" className="hover:text-blue-600">Workshops</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#sponsors" className="hover:text-blue-600">Sponsors</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Contact</h4>
          <p className="mt-3 text-gray-600">hello@shaastra.org</p>
          <p className="text-gray-600">IIT Madras, Chennai</p>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Shaastra. All rights reserved.</div>
    </footer>
  )
}
