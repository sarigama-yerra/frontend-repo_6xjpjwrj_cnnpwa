import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Events', href: '#events' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'About', href: '#about' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-xl font-bold tracking-tight">TechFest</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#register" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Register</a>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block px-2 py-2 rounded-md text-gray-700 hover:bg-black/5">
                {item.label}
              </a>
            ))}
            <a href="#register" className="block px-2 py-2 rounded-md bg-blue-600 text-white text-center">Register</a>
          </div>
        </div>
      )}
    </header>
  )
}
