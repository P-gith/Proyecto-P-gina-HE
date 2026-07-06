import { motion } from 'framer-motion'
import { Download, HardDrive, Monitor, Star, Users } from 'lucide-react'
import GameCover from './GameCover'

/** Tarjeta individual de juego con informacion y boton de descarga. */
export default function GameCard({ game, index, onDownload }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/20"
    >
      <GameCover
        src={game.image}
        alt={`Portada de ${game.name}`}
        className="h-40 transition-transform duration-300 group-hover:scale-[1.02]"
      />

      <div className="p-4">
        <h3 className="mb-3 truncate text-lg font-bold text-white transition-colors group-hover:text-blue-300">
          {game.name}
        </h3>

        <div className="mb-4 space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <HardDrive className="h-3.5 w-3.5 shrink-0 text-gray-500" />
            <span>{game.size}</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-3.5 w-3.5 shrink-0 text-gray-500" />
            <span>{game.platform}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-blue-400" />
              {game.downloads}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              {game.rating}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onDownload(game)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          <Download className="h-4 w-4" />
          Descargar Gratis
        </motion.button>
      </div>
    </motion.article>
  )
}