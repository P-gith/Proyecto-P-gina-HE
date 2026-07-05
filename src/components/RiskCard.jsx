import { motion } from 'framer-motion'
import { Bug, Eye, FileWarning, KeyRound, Monitor } from 'lucide-react'

const iconMap = {
  Monitor,
  FileWarning,
  KeyRound,
  Bug,
  Eye,
}

/** Tarjeta de riesgo individual para la pantalla educativa. */
export default function RiskCard({ icon, title, description, index }) {
  const Icon = iconMap[icon] || Monitor

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4 transition-colors hover:border-red-500/30 hover:bg-gray-800"
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
        <Icon className="h-5 w-5 text-red-400" />
      </div>
      <h4 className="mb-1 text-sm font-semibold text-white">{title}</h4>
      <p className="text-xs leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  )
}