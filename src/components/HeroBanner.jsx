import { motion } from 'framer-motion'
import { Download, Star, Users } from 'lucide-react'

/** Banner principal promocionando el juego destacado. */
export default function HeroBanner({ game, onDownload }) {
  if (!game) return null

  return (
    <section id="inicio" className="relative overflow-hidden">
      <img
        src={game.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-4 py-1 text-sm font-medium text-blue-400 ring-1 ring-blue-500/30">
            🔥 Más Popular
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {game.name}
          </h1>

          <p className="mb-6 text-lg text-gray-300">
            Descarga gratis la versión completa. Sin registro, sin límites.
            Disponible para {game.platform}.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-white">{game.rating}</span> / 5
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-blue-400" />
              {game.downloads} descargas
            </span>
            <span>{game.size}</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onDownload(game)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition-shadow hover:shadow-blue-800/60"
          >
            <Download className="h-5 w-5" />
            Descargar Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}