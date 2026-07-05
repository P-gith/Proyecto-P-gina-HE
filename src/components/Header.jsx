import { motion } from 'framer-motion'
import { Gamepad2 } from 'lucide-react'
import SearchBar from './SearchBar'
import { navLinks } from '../data/games'

/** Barra superior con logo, navegación y búsqueda. */
export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-gray-800 bg-black/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-900/30 transition-transform group-hover:scale-105">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Game<span className="text-blue-400">Vault</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SearchBar />
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-gray-800 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}