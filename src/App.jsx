import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import GameGrid from './components/GameGrid'
import DownloadModal from './components/DownloadModal'
import { games } from './data/games'

/**
 * Componente principal de la aplicación.
 * Portal ficticio de descargas con simulación educativa.
 */
export default function App() {
  const [selectedGame, setSelectedGame] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featuredGame = games.find((g) => g.featured) || games[0]

  const handleDownload = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main>
        <HeroBanner game={featuredGame} onDownload={handleDownload} />
        <GameGrid games={games} onDownload={handleDownload} />
      </main>

      <div id="categorias" className="sr-only" />
      <div id="populares" className="sr-only" />
      <div id="contacto" className="sr-only" />

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>© 2026 GameVault — Simulación educativa para Casa Abierta de Hacking Ético</p>
      </footer>

      <DownloadModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}