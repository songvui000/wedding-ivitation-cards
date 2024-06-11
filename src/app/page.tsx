'use client'
import Wedding from '@/components/wedding/Wedding'
import { useEffect, useState } from 'react'

function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const script = document.createElement('script')
    script.src = 'webfont.js'
    document.body.appendChild(script)

    const script1 = document.createElement('script')

    script1.src = 'jquery.js'
    document.body.appendChild(script1)

    const script2 = document.createElement('script')

    script2.src = 'webflow.js'
    document.body.appendChild(script2)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Wedding />
      {/* <Script src="webfont.js" type="text/javascript" />
      <Script src="jquery.js" type="text/javascript" />
      <Script src="webflow.js" type="text/javascript" strategy="afterInteractive" /> */}
    </>
  )
}

export default Home
