"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Heart,
  Sparkles,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Carrosuel from "./components/Carrosuel"
import Gallery from "./components/Gallery"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  // Refs for scroll animations and navigation
  const servicesRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const promotionsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Check if elements are in view
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 })
  const galleryInView = useInView(galleryRef, { once: false, amount: 0.3 })
  const promotionsInView = useInView(promotionsRef, { once: false, amount: 0.3 })
  const faqInView = useInView(faqRef, { once: false, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 })

  // Animation controls
  const servicesControls = useAnimation()
  const galleryControls = useAnimation()
  const promotionsControls = useAnimation()
  const faqControls = useAnimation()
  const contactControls = useAnimation()

  // Update active section based on scroll position
  useEffect(() => {
    if (servicesInView) {
      setActiveSection("services")
      servicesControls.start("visible")
    }
    if (galleryInView) {
      setActiveSection("gallery")
      galleryControls.start("visible")
    }
    if (promotionsInView) {
      setActiveSection("promotions")
      promotionsControls.start("visible")
    }
    if (faqInView) {
      setActiveSection("faq")
      faqControls.start("visible")
    }
    if (contactInView) {
      setActiveSection("contact")
      contactControls.start("visible")
    }
  }, [
    servicesInView,
    galleryInView,
    promotionsInView,
    faqInView,
    contactInView,
    servicesControls,
    galleryControls,
    promotionsControls,
    faqControls,
    contactControls,
  ])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-md"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
              <div className="absolute inset-[1px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold gradient-text">Eidymar</h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary/10 text-primary"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              onClick={() => servicesRef.current && servicesRef.current.scrollIntoView({ behavior: "smooth" })}
            >
              Servicios
            </Link>
            <Link
              href="#gallery"
              className={`nav-link ${activeSection === "gallery" ? "active" : ""}`}
              onClick={() => galleryRef.current && galleryRef.current.scrollIntoView({ behavior: "smooth" })}
            >
              Galería
            </Link>
            <Link
              href="#promotions"
              className={`nav-link ${activeSection === "promotions" ? "active" : ""}`}
              onClick={() => promotionsRef.current && promotionsRef.current.scrollIntoView({ behavior: "smooth" })}
            >
              Promociones
            </Link>
            <Link
              href="#faq"
              className={`nav-link ${activeSection === "faq" ? "active" : ""}`}
              onClick={() => faqRef.current && faqRef.current.scrollIntoView({ behavior: "smooth" })}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })}
            >
              Contacto
            </Link>
            <Button className="bg-primary text-white" asChild>
              <Link href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank">
                Agendar Cita
              </Link>
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#services"
                className={`nav-link py-2 ${activeSection === "services" ? "text-primary" : ""}`}
                onClick={() => {
                  servicesRef.current && servicesRef.current.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Servicios
              </Link>
              <Link
                href="#gallery"
                className={`nav-link py-2 ${activeSection === "gallery" ? "text-primary" : ""}`}
                onClick={() => {
                  galleryRef.current && galleryRef.current.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Galería
              </Link>
              <Link
                href="#promotions"
                className={`nav-link py-2 ${activeSection === "promotions" ? "text-primary" : ""}`}
                onClick={() => {
                  promotionsRef.current && promotionsRef.current.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Promociones
              </Link>
              <Link
                href="#faq"
                className={`nav-link py-2 ${activeSection === "faq" ? "text-primary" : ""}`}
                onClick={() => {
                  faqRef.current && faqRef.current.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className={`nav-link py-2 ${activeSection === "contact" ? "text-primary" : ""}`}
                onClick={() => {
                  contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Contacto
              </Link>
              <Button className="w-full bg-primary text-white" asChild>
                <Link href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank">
                  Agendar Cita
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative overflow-hidden animated-bg">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-40 right-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
            />
          </div>
          <div className="relative container py-20 md:py-32 flex flex-col items-center text-center">
            {/** <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="mb-4"
            >
              <Sparkles className="h-12 w-12 text-primary animate-bounce-subtle" />
            </motion.div>*/}
            <Carrosuel />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tight gradient-text"
            >
              Arte en tus manos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-foreground max-w-2xl"
            >
              Transforma tus uñas con nuestros servicios profesionales de manicura y diseños exclusivos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary text-white shadow-md" asChild>
                <Link href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank">
                  Agendar por WhatsApp
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary bg-white" asChild>
                <Link href="#services" onClick={() => servicesRef.current && servicesRef.current.scrollIntoView({ behavior: "smooth" })}>
                  Ver Servicios
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Promotional Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-4"
        >
          <div className="container">
            <div className="rounded-lg bg-primary text-white p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                  <Gift className="h-6 w-6 inline-block mr-2 text-white" />
                  <h3 className="font-bold text-xl">¡PROMOCIÓN ESPECIAL!</h3>
                  <p className="text-white mt-1">20% de descuento en tu primer servicio de manicura completa</p>
                </div>
                <Button variant="secondary" size="lg" className="bg-white text-primary font-bold" asChild>
                  <Link
                    href="https://wa.me/123456789?text=Hola,%20me%20interesa%20la%20promoción%20de%20manicura"
                    target="_blank"
                  >
                    Aprovechar Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services section */}
        <section id="services" ref={servicesRef} className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>
          <motion.div
            initial="hidden"
            animate={servicesControls}
            variants={staggerContainer}
            className="container relative"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Star className="h-8 w-8 text-primary mx-auto mb-2 animate-spin-slow" />
              <h2 className="text-3xl font-bold gradient-text inline-block">Nuestros Servicios</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios de manicura y cuidado de uñas para satisfacer todas tus
                necesidades.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Manicura Básica",
                  description: "Limado, pulido y esmaltado de uñas con colores a elección.",
                  price: "Desde $15",
                  image: "/fotos/foto1.jpg",
                  icon: <Star className="h-5 w-5" />,
                  color: "from-primary/80 to-primary/40",
                },
                {
                  title: "Manicura Gel",
                  description: "Esmaltado semipermanente que dura hasta 3 semanas sin dañar tus uñas.",
                  price: "Desde $25",
                  image: "/fotos/foto2.jpg",
                  icon: <Sparkles className="h-5 w-5" />,
                  color: "from-accent/80 to-accent/40",
                },
                {
                  title: "Nail Art",
                  description: "Diseños exclusivos y personalizados para ocasiones especiales.",
                  price: "Desde $35",
                  image: "/fotos/foto4.jpg",
                  icon: <Heart className="h-5 w-5" />,
                  color: "from-secondary/80 to-secondary/40",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-xl border bg-white/80 backdrop-blur-sm text-card-foreground shadow-lg card-colorful overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20" />
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary animate-bounce-subtle">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                    <p className="mt-4 font-semibold text-primary">{service.price}</p>
                    <Button className="mt-4 w-full bg-primary text-white" asChild>
                      <Link
                        href={`https://wa.me/+574128967686?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                      >
                        Reservar
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary" asChild>
                <Link href="#contact" onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })}>
                  Ver Todos los Servicios
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Gallery section */}
        <section
          id="gallery"
          ref={galleryRef}
          className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10"
        >
          <motion.div initial="hidden" animate={galleryControls} variants={staggerContainer} className="container">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Sparkles className="h-8 w-8 text-accent mx-auto mb-2 animate-bounce-subtle" />
              <h2 className="text-3xl font-bold gradient-text inline-block">Galería de Trabajos</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Explora algunos de nuestros mejores trabajos y diseños exclusivos.
              </p>
            </motion.div>

          {/**   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/fotos/foto1.jpg+${index + 1}`}
                    alt={`Diseño ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-accent/50 opacity-0 group-hover:opacity-90 flex items-center justify-center">
                    <p className="text-white font-medium text-lg">{`Diseño ${index + 1}`}</p>
                  </div>
                </motion.div>
              ))}
            </div>*/}
            <Gallery />

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button size="lg" className="bg-primary text-white" asChild>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="mr-2 h-4 w-4" /> Ver más en Instagram
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Promotions section */}
        <section id="promotions" ref={promotionsRef} className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>
          <motion.div
            initial="hidden"
            animate={promotionsControls}
            variants={staggerContainer}
            className="container relative"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Gift className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-subtle" />
              <h2 className="text-3xl font-bold gradient-text inline-block">Promociones Especiales</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Aprovecha nuestras ofertas exclusivas y paquetes especiales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Pack Amigas",
                  description: "Ven con una amiga y ambas obtienen un 15% de descuento en cualquier servicio.",
                  image: "/placeholder.svg?height=250&width=500&text=Pack+Amigas",
                  gradient: "from-primary via-accent to-primary",
                },
                {
                  title: "Martes de Manicura",
                  description: "Todos los martes 2x1 en manicura básica. ¡No te lo pierdas!",
                  image: "/placeholder.svg?height=250&width=500&text=Martes+de+Manicura",
                  gradient: "from-accent via-secondary to-accent",
                },
              ].map((promo, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="relative rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{promo.title}</h3>
                    <p className="mt-2">{promo.description}</p>
                    <Button className="mt-4 bg-white text-primary font-bold" asChild>
                      <Link
                        href={`https://wa.me/123456789?text=Hola,%20me%20interesa%20la%20promoción%20${encodeURIComponent(promo.title)}`}
                        target="_blank"
                      >
                        Reservar Ahora
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ section */}
        <section
          id="faq"
          ref={faqRef}
          className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        >
          <motion.div initial="hidden" animate={faqControls} variants={staggerContainer} className="container">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <ChevronDown className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-subtle" />
              <h2 className="text-3xl font-bold gradient-text inline-block">Preguntas Frecuentes</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Resolvemos tus dudas sobre nuestros servicios de manicura.
              </p>
            </motion.div>

            <motion.div variants={popIn} className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "¿Cuánto tiempo dura una manicura de gel?",
                    answer:
                      "Una manicura de gel puede durar entre 2 y 3 semanas, dependiendo del crecimiento de tus uñas y el cuidado que les des.",
                  },
                  {
                    question: "¿Es necesario agendar cita con anticipación?",
                    answer:
                      "Sí, recomendamos agendar tu cita con al menos 24 horas de anticipación para garantizar disponibilidad. Puedes hacerlo a través de WhatsApp o llamándonos directamente.",
                  },
                  {
                    question: "¿Qué debo hacer si se me rompe una uña?",
                    answer:
                      "Si se te rompe una uña, contáctanos de inmediato. Ofrecemos servicio de reparación de uñas y podemos ayudarte a solucionar el problema rápidamente.",
                  },
                  {
                    question: "¿Puedo llevar mi propio esmalte?",
                    answer:
                      "Sí, puedes traer tu propio esmalte si tienes un color específico que te gusta. Sin embargo, contamos con una amplia gama de colores y marcas profesionales.",
                  },
                  {
                    question: "¿Cómo debo cuidar mis uñas después de una manicura?",
                    answer:
                      "Recomendamos usar guantes para tareas domésticas, aplicar aceite de cutícula diariamente, evitar usar las uñas como herramientas y mantenerlas hidratadas con crema de manos.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/20">
                    <AccordionTrigger className="text-left text-primary">{faq.question}</AccordionTrigger>
                    <AccordionContent className="animate-slide-in-bottom">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">¿No encuentras respuesta a tu pregunta?</p>
              <Button className="bg-primary text-white" asChild>
                <Link
                  href="https://wa.me/123456789?text=Hola,%20tengo%20una%20pregunta%20sobre%20los%20servicios"
                  target="_blank"
                >
                  Pregúntanos por WhatsApp
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact section */}
        <section id="contact" ref={contactRef} className="py-16 md:py-24">
          <motion.div initial="hidden" animate={contactControls} variants={staggerContainer} className="container">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Mail className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce-subtle" />
              <h2 className="text-3xl font-bold gradient-text inline-block">Contacto</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Contáctanos para agendar una cita o resolver cualquier duda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={slideInLeft} className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">Av. Principal 123, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@bellanails.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Horario</h3>
                    <p className="text-muted-foreground">Lunes a Sábado: 9:00 - 19:00</p>
                    <p className="text-muted-foreground">Domingo: Cerrado</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <Button size="icon" variant="outline" className="border-primary text-primary" asChild>
                      <Link href="https://instagram.com" target="_blank">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" className="border-primary text-primary" asChild>
                      <Link href="https://facebook.com" target="_blank">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideInRight} className="rounded-lg border bg-card p-6 shadow-lg card-colorful">
                <h3 className="text-xl font-bold mb-4 gradient-text">Contáctanos</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-primary text-white" size="lg" asChild>
                    <Link
                      href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                      target="_blank"
                    >
                      Agendar Cita por WhatsApp
                    </Link>
                  </Button>
                  <Button className="w-full border-2 border-primary text-primary" size="lg" variant="outline" asChild>
                    <Link href="tel:+123456789">Llamar Ahora</Link>
                  </Button>
                </div>

                <div className="mt-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Mapa"
                      alt="Ubicación"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-center justify-center">
                      <Button variant="secondary" className="bg-white text-primary" asChild>
                        <Link href="https://maps.google.com" target="_blank">
                          Ver en Google Maps
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary" />
          <div className="container relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">¿Lista para lucir uñas perfectas?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-white">
              Agenda tu cita hoy mismo y déjanos transformar tus manos con nuestros servicios profesionales.
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-white text-primary font-bold" asChild>
              <Link href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank">
                Agendar Cita Ahora
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold gradient-text">Bella Nails</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <Link
                href="#services"
                className="text-sm text-primary"
                onClick={() => servicesRef.current && servicesRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                Servicios
              </Link>
              <Link
                href="#gallery"
                className="text-sm text-primary"
                onClick={() => galleryRef.current && galleryRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                Galería
              </Link>
              <Link
                href="#promotions"
                className="text-sm text-primary"
                onClick={() => promotionsRef.current && promotionsRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                Promociones
              </Link>
              <Link
                href="#faq"
                className="text-sm text-primary"
                onClick={() => faqRef.current && faqRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm text-primary"
                onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                Contacto
              </Link>
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Button size="icon" variant="ghost" className="text-primary" asChild>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" className="text-primary" asChild>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Eidymar Manicurista Fashion. Todos los derechos reservados.</p>
            <p>&copy; {new Date().getFullYear()} AgustinoWeb .C.A</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

