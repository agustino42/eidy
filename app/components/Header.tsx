import { NavItem } from '../types'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeaderProps {
  activeSection: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  navItems: NavItem[]
}

export function Header({ activeSection, isOpen, setIsOpen, navItems }: HeaderProps) {
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-md"
    >
      {/* ... contenido del header */}
    </motion.header>
  )
} 