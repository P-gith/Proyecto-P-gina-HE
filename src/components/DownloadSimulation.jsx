import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import EducationalScreen from './EducationalScreen'

const STEPS = [
  { message: 'Preparando descarga...', duration: 2000 },
  { message: 'Verificando servidor...', duration: 2000 },
  { message: 'Generando enlace seguro...', duration: 2000 },
]

/**
 * Simulacion visual del proceso de descarga.
 * Tras completar la barra de progreso, muestra la pantalla educativa.
 */
export default function DownloadSimulation({ game, onClose }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showEducation, setShowEducation] = useState(false)

  useEffect(() => {
    if (stepIndex >= STEPS.length) {
      setShowProgress(true)
      return
    }

    const timer = setTimeout(() => {
      setStepIndex((prev) => prev + 1)
    }, STEPS[stepIndex].duration)

    return () => clearTimeout(timer)
  }, [stepIndex])

  useEffect(() => {
    if (!showProgress) return

    const duration = 3000
    const interval = 30
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setShowEducation(true), 400)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [showProgress])

  if (showEducation) {
    return <EducationalScreen onClose={onClose} />
  }

  return (
    <div className="p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-6"
      >
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-3xl font-black text-white/30">
          {game.name.charAt(0)}
        </div>
        <h3 className="text-lg font-bold text-white">{game.name}</h3>
        <p className="text-sm text-gray-400">{game.size} - {game.platform}</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showProgress ? (
          <motion.div
            key={STEPS[stepIndex]?.message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
            <span className="text-gray-300">
              {STEPS[stepIndex]?.message}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Descargando...</span>
              <span className="font-mono font-semibold text-blue-400">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}