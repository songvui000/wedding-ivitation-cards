import Wedding from '@/components/wedding/Wedding'
import Script from 'next/script'

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
