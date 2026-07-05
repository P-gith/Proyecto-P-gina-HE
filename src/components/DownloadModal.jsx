import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import DownloadSimulation from './DownloadSimulation'

/** Modal elegante con simulacion de descarga y pantalla educativa. */
export default function DownloadModal({ game, isOpen, onClose }) {
  if (!isOpen || !game) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl shadow-black/50"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <DownloadSimulation game={game} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}