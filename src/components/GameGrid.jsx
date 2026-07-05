import GameCard from './GameCard'

/** Seccion de juegos destacados en grid responsive. */
export default function GameGrid({ games, onDownload }) {
  return (
    <section id="juegos" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Juegos Destacados
        </h2>
        <p className="mt-2 text-gray-400">
          Los títulos más descargados esta semana
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game, index) => (
          <GameCard
            key={game.id}
            game={game}
            index={index}
            onDownload={onDownload}
          />
        ))}
      </div>
    </section>
  )
}