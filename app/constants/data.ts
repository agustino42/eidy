import { Star, Sparkles, Heart } from 'lucide-react'
import { Service, FaqItem, Promotion } from '@/app/types'

export const SERVICES: Service[] = [
  {
    title: "Manicura Básica",
    description: "Limado, pulido y esmaltado de uñas con colores a elección.",
    price: "Desde $15",
    image: "/fotos/foto1.jpg", // Actualiza con la ruta correcta de la imagen
    icon: "Star",
    color: "from-primary/80 to-primary/40",
  },
  {
    title: "Manicura Gel",
    description: "Esmaltado semipermanente que dura hasta 3 semanas sin dañar tus uñas.",
    price: "Desde $25",
    image: "/images/manicura-gel.jpg", // Actualiza con la ruta correcta de la imagen
    icon: <Sparkles className="h-5 w-5" />,
    color: "from-accent/80 to-accent/40",
  },
  {
    title: "Nail Art",
    description: "Diseños exclusivos y personalizados para ocasiones especiales.",
    price: "Desde $35",
    image: "/images/nail-art.jpg", // Actualiza con la ruta correcta de la imagen
    icon: <Heart className="h-5 w-5" />,
    color: "from-secondary/80 to-secondary/40",
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuánto tiempo dura una manicura de gel?",
    answer: "Una manicura de gel puede durar entre 2 y 3 semanas, dependiendo del crecimiento de tus uñas y el cuidado que les des.",
  },
  // ... otras preguntas
]

export const PROMOTIONS: Promotion[] = [
  {
    title: "Pack Amigas",
    description: "Ven con una amiga y ambas obtienen un 15% de descuento en cualquier servicio.",
    image: "/images/pack-amigas.jpg", // Actualiza con la ruta correcta de la imagen
    gradient: "from-primary via-accent to-primary",
  },
  // ... otras promociones
]