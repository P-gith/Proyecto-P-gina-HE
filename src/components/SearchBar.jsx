import { Search } from 'lucide-react'

/** Barra de busqueda decorativa (sin funcionalidad real). */
export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <input
        type="search"
        placeholder="Buscar juegos..."
        className="w-full rounded-lg border border-gray-700 bg-gray-900 py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        readOnly
        aria-label="Buscar juegos"
      />
    </div>
  )
}