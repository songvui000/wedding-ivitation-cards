import Image from 'next/image'
import cover from '@/../public/images/cover.jpg'
import background from '@/../public/images/background.png'
import foreground from '@/../public/images/foreground.svg'
import mobileBackground from '@/../public/images/mobile-background.png'
import mobileForeground from '@/../public/images/mobile-foreground.svg'
import tabletBackground from '@/../public/images/tablet-background.png'
import tabletforeground from '@/../public/images/tablet-foreground.svg'
import { brideInformation, groomInformation } from '@/app/utils/information'

const CharOverflow = ({ name }: { name: string }) => {
  return name.split('').map((char, index) => (
    <div className="overflow" key={index}>
      <div
        style={{
          WebkitTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          MozTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          msTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
          transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
        }}
        className="main-heading h1 white"
      >
        {char}
      </div>
    </div>
  ))
}

export default function HeroSection() {
  return (
    <div className="page-wrapper">
      <div data-w-id="523e8740-2d2b-8a0e-23d6-6199243ad698" className="hero-section hide-tablet wf-section">
        <div className="sticky-wrap">
          <div className="hero-text-container">
            <CharOverflow name={groomInformation.name} />
            <div className="overflow margin-horizontal">
              <div className="main-heading h1 white _2">&amp;</div>
            </div>
            <CharOverflow name={brideInformation.name} />
          </div>
          <div data-w-id="b5893041-4e5e-252f-7e56-b88422206c7f" style={{ opacity: 0 }} className="wrap-text">
            <div className="line" />
            <p id="typed" className="paragraph">
              Denver 31 Luglio 2023
            </p>
            <div className="line" />
          </div>
          <Image
            src={cover}
            loading="lazy"
            style={{ opacity: 0 }}
            sizes="(max-width: 1439px) 100vw, 2100px"
            alt=""
            className="hero-image absolute tiixi"
          />
          <Image
            src={background}
            loading="lazy"
            style={{ opacity: 0 }}
            data-w-id="2c30044d-9347-5a85-a9c0-8ed0980919d1"
            sizes="100vw"
            alt=""
            className="hero-image absolute big"
          />
          <Image
            src={foreground}
            loading="lazy"
            style={{ opacity: 0 }}
            data-w-id="1ed43409-6dcb-74d8-fa73-8ac576272d1c"
            alt=""
            className="hero-image absolute big"
          />
        </div>
      </div>
      <div data-w-id="b0de52b7-5c5b-8139-331a-b0fb0844eefa" className="hero-section hide-mobile-landscape wf-section">
        <div className="sticky-wrap">
          <div className="hero-text-container">
            <CharOverflow name={groomInformation.name} />
            <div className="overflow margin-horizontal">
              <div className="main-heading h1 white _2">&amp;</div>
            </div>
            <CharOverflow name={brideInformation.name} />
          </div>
          <div className="wrap-text">
            <div className="line" />
            <p id="typed" udesly-typewriter="Ragusa 31 Luglio 2021" color="#ffffff" className="paragraph">
              Denver 31 Luglio 2023
            </p>
            <div className="line" />
          </div>
          <Image
            src={cover}
            loading="lazy"
            style={{ opacity: 0 }}
            sizes="100vw"
            alt=""
            className="hero-image absolute tiixi"
          />
          <Image src={tabletBackground} loading="lazy" sizes="100vw" alt="" className="hero-image absolute big" />
          <Image src={tabletforeground} loading="lazy" alt="" className="hero-image absolute big" />
        </div>
      </div>
      <div data-w-id="bdd5dd2d-c332-07bc-7827-649d3f83b97f" className="hero-section show-mobile-landscape wf-section">
        <div className="sticky-wrap">
          <div className="hero-text-container">
            <CharOverflow name={groomInformation.name} />
            <div className="overflow margin-horizontal">
              <div className="main-heading h1 white _2">&amp;</div>
            </div>
            <CharOverflow name={brideInformation.name} />
          </div>
          <div className="wrap-text">
            <div className="line" />
            <p id="typed" udesly-typewriter="Ragusa 31 Luglio 2021" color="#ffffff" className="paragraph">
              Denver 31 Luglio 2023
            </p>
            <div className="line" />
          </div>
          <Image
            src={cover}
            loading="lazy"
            style={{ opacity: 0 }}
            sizes="100vw"
            alt=""
            className="hero-image absolute tiixi"
          />
          <Image src={mobileBackground} loading="lazy" alt="" className="hero-image absolute big" />
          <Image src={mobileForeground} loading="lazy" alt="" className="hero-image absolute big" />
        </div>
      </div>
    </div>
  )
}
