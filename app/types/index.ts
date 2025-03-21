import { ReactNode } from 'react'

export interface Service {
  title: string
  description: string
  price: string
  image: string
  icon: ReactNode
  color: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Promotion {
  title: string
  description: string
  image: string
  gradient: string
}

export interface NavItem {
  label: string
  href: string
  ref: React.RefObject<HTMLElement>
} 