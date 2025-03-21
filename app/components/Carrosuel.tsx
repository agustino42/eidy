import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/fotos/foto1.jpg",
  "/fotos/foto2.jpg",
  "/fotos/foto5.jpg",
  "/fotos/foto4.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-96"
        >
          <Image
            src={images[index]}
            alt="Manicura profesional"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
