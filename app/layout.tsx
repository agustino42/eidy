"use client"

import './globals.css'
import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading && <LoadingScreen />}
        {!isLoading && children}
      </body>
    </html>
  )
}