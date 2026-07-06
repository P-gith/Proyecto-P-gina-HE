/**
 * Imagen de portada reutilizable para juegos.
 */
export default function GameCover({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover',
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full transition-transform duration-300 ${imageClassName}`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
    </div>
  )
}
