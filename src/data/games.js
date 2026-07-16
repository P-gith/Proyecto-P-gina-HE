import gtaViCover from '../assets/games/gta-vi.jpg'
import forzaHorizonCover from '../assets/games/forza-horizon-6.jpg'
import residentEvilCover from '../assets/games/resident-evil-9.avif'
import firstLightCover from '../assets/games/007-first-light.avif'
import pragmataCover from '../assets/games/pragmata.jpg'
import fifaCover from '../assets/games/fifa-2026.jpg'

/**
 * Datos de juegos ficticios para la simulación educativa.
 * Modifica este arreglo para cambiar los nombres, tamaños y demás información.
 */
export const games = [
  {
    id: 1,
    name: 'Grand Theft Auto VI',
    size: '89.4 GB',
    platform: 'Windows',
    downloads: '5.2M',
    rating: 4.9,
    featured: false,
    image: gtaViCover,
  },
  {
    id: 2,
    name: 'Forza Horizon 6',
    size: '62.1 GB',
    platform: 'Windows / Xbox',
    downloads: '2.8M',
    rating: 4.8,
    featured: false,
    image: forzaHorizonCover,
  },
  {
    id: 3,
    name: 'Resident Evil 9',
    size: '48.7 GB',
    platform: 'Windows',
    downloads: '1.9M',
    rating: 4.7,
    featured: false,
    image: residentEvilCover,
  },
  {
    id: 4,
    name: '007 First Light',
    size: '55.3 GB',
    platform: 'Windows / PlayStation',
    downloads: '1.4M',
    rating: 4.6,
    featured: false,
    image: firstLightCover,
  },
  {
    id: 5,
    name: 'Pragmata',
    size: '38.9 GB',
    platform: 'Windows',
    downloads: '980K',
    rating: 4.5,
    featured: false,
    image: pragmataCover,
  },
  {
    id: 6,
    name: 'FIFA 2026',
    size: '42.6 GB',
    platform: 'Windows',
    downloads: '3.6M',
    rating: 4.4,
    featured: true,
    image: fifaCover,
    downloadUrl: '/downloads/Setup.exe',
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
