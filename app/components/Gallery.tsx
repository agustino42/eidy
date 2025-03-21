import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const images = [
  "/fotos/foto1.jpg",
  "/fotos/foto2.jpg",
  "/fotos/foto3.jpg",
  "/fotos/foto4.jpg",
  "/fotos/foto5.jpg",
  "/fotos/foto6.jpg",
  "/fotos/foto7.jpg",
  "/fotos/foto8.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <motion.div initial="hidden" animate="visible" className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text inline-block">Galería de Trabajos</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explora algunos de nuestros mejores trabajos y diseños exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image src={src} alt={`Diseño ${index + 1}`} width={300} height={300} className="object-cover w-full h-full" />
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center">
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2">
            <span>Ver más en Instagram</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Modal para ver imagen ampliada */}
      {selectedImage && (
        <Dialog open={true} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative max-w-3xl w-full p-4">
            <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setSelectedImage(null)}>✖</button>
            <Image src={selectedImage} alt="Ampliado" width={800} height={600} className="w-full rounded-lg" />
          </div>
        </Dialog>
      )}
    </section>
  );
}
