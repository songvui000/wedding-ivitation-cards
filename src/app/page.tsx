import Script from 'next/script'
import Wedding from '@/components/wedding/Wedding'

function Home() {
  return (
    <>
      <Wedding />
      <Script src="webfont.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="jquery.js" type="text/javascript" strategy="beforeInteractive" />
      <Script src="webflow.js" type="text/javascript" strategy="afterInteractive" />
    </>
  )
}

export default Home
