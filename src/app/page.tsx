'use client'
import Script from 'next/script'
import Wedding from '@/components/wedding/Wedding'
import { useEffect, useState } from 'react'

function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Wedding />
      <Script src="webfont.js" type="text/javascript" />
      <Script src="jquery.js" type="text/javascript" />
      <Script src="webflow.js" type="text/javascript" strategy="afterInteractive" />
    </>
  )
}

export default Home
