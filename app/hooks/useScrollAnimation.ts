import { useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

export function useScrollAnimation(ref: React.RefObject<HTMLElement>) {
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  return { inView, controls }
} 