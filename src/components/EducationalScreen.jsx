import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react'
import RiskCard from './RiskCard'
import { protectionTips, securityRisks } from '../data/games'

/** Pantalla educativa mostrada al finalizar la simulación de descarga. */
export default function EducationalScreen({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-h-[80vh] overflow-y-auto p-6 sm:p-8"
    >
      <div className="mb-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 ring-2 ring-yellow-500/30"
        >
          <AlertTriangle className="h-8 w-8 text-yellow-400" />
        </motion.div>

        <h2 className="text-2xl font-bold text-white">
          ⚠️ Simulación Educativa
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-300">
          En una situación real, descargar software desde sitios desconocidos
          puede poner en riesgo tu equipo si el archivo contiene un programa
          malicioso.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-gray-700 bg-gray-800/40 p-5">
        <div className="mb-2 flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-red-400" />
          <h3 className="text-lg font-semibold text-white">
            ¿Qué es un Backdoor?
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-300">
          Un backdoor es un tipo de software malicioso que permite a un
          atacante obtener acceso remoto a un equipo sin que el usuario lo
          note.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="mb-4 text-lg font-semibold text-white">
          ¿Qué podría ocurrir?
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {securityRisks.map((risk, index) => (
            <RiskCard key={risk.title} {...risk} index={index} />
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">
          ¿Cómo protegerte?
        </h3>
        <ul className="space-y-3">
          {protectionTips.map((tip, index) => (
            <motion.li
              key={tip}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.06 }}
              className="flex items-start gap-2.5 text-sm text-gray-300"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              {tip}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClose}
        className="w-full rounded-xl bg-gray-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-600"
      >
        Volver al sitio
      </motion.button>
    </motion.div>
  )
}