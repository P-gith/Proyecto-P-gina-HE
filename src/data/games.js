/**
 * Datos de juegos ficticios para la simulación educativa.
 * Modifica este arreglo para cambiar los nombres, tamaños y demás información.
 */
export const games = [
  {
    id: 1,
    name: 'Cyber Legends 2077',
    size: '45.2 GB',
    platform: 'Windows',
    downloads: '2.4M',
    rating: 4.8,
    featured: true,
    imageColor: 'from-blue-600 to-purple-700',
  },
  {
    id: 2,
    name: 'Shadow Realm: Origins',
    size: '32.8 GB',
    platform: 'Windows',
    downloads: '1.8M',
    rating: 4.6,
    featured: false,
    imageColor: 'from-gray-700 to-gray-900',
  },
  {
    id: 3,
    name: 'Neon Drift Racing',
    size: '18.5 GB',
    platform: 'Windows / Mac',
    downloads: '956K',
    rating: 4.4,
    featured: false,
    imageColor: 'from-cyan-600 to-blue-800',
  },
  {
    id: 4,
    name: 'Fortress of Eternity',
    size: '28.1 GB',
    platform: 'Windows',
    downloads: '1.2M',
    rating: 4.7,
    featured: false,
    imageColor: 'from-indigo-700 to-slate-900',
  },
  {
    id: 5,
    name: 'Galactic Warfare X',
    size: '52.3 GB',
    platform: 'Windows',
    downloads: '3.1M',
    rating: 4.9,
    featured: false,
    imageColor: 'from-blue-800 to-black',
  },
  {
    id: 6,
    name: 'Mystic Chronicles',
    size: '22.7 GB',
    platform: 'Windows / Linux',
    downloads: '780K',
    rating: 4.3,
    featured: false,
    imageColor: 'from-violet-700 to-purple-900',
  },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Juegos', href: '#juegos' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Populares', href: '#populares' },
  { label: 'Contacto', href: '#contacto' },
]

export const securityRisks = [
  {
    icon: 'Monitor',
    title: 'Acceso remoto al equipo',
    description: 'Un atacante podría controlar tu computadora desde otro lugar.',
  },
  {
    icon: 'FileWarning',
    title: 'Robo de archivos',
    description: 'Documentos, fotos y datos personales podrían ser extraídos.',
  },
  {
    icon: 'KeyRound',
    title: 'Robo de contraseñas',
    description: 'Credenciales guardadas en el navegador o sistema podrían ser robadas.',
  },
  {
    icon: 'Bug',
    title: 'Instalación de otros programas maliciosos',
    description: 'El malware puede descargar e instalar más amenazas en segundo plano.',
  },
  {
    icon: 'Eye',
    title: 'Espionaje del sistema',
    description: 'Cámara, micrófono y actividad en pantalla podrían ser monitoreados.',
  },
]

export const protectionTips = [
  'Descarga software únicamente desde sitios oficiales.',
  'Verifica la dirección del sitio web.',
  'Evita descargar cracks o programas modificados.',
  'Mantén actualizado tu antivirus.',
  'Analiza los archivos antes de ejecutarlos.',
]