import rightLeaf from '@/../public/images/right-leaf.svg'
import image from '@/../public/images/K1A16361.jpg'
import Image from 'next/image'
export default function EventParties() {
  const title = 'Event&Parties'
  const wedding = 'Wedding'
  const mainCerinomy = 'Tân hôn'
  const weddingParty = 'Báo hỷ'

  return (
    <div data-w-id="5dfa0102-0389-3bf6-bfa2-d41a5c61cc59">
      <div id="When-and-where" className="event-parties-section wf-section">
        <div className="container content">
          <div data-w-id="9744d322-e678-20b2-f573-144ce9b019b5" className="text-wrapper">
            {title.split('').map((letter, index) => {
              const className = letter === '&' ? 'mx-10' : ''
              return (
                <div key={index} className={`overflow ${className}`}>
                  <div
                    data-w-id="9744d322-e678-20b2-f573-144ce9b019b7"
                    style={{
                      WebkitTransform:
                        'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',

                      MozTransform:
                        'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform:
                        'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform:
                        'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    }}
                    className="main-heading-2 h3"
                  >
                    {letter}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="w-layout-grid event-parties-grid">
            <div id="w-node-_9744d322-e678-20b2-f573-144ce9b019de-13589a9f" className="container-card">
              <div data-w-id="9744d322-e678-20b2-f573-144ce9b019df" className="card-important-people first hide-cursor">
                <div className="text-wrapper hide">
                  {wedding.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b019e2" className="text-span-2 black">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b019f6" className="ellipse" />
              </div>
              <div className="container-image-event">
                <img
                  src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb107636a87f5_event1.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 79vw, 470px"
                  srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb107636a87f5_event1-p-500.jpeg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb107636a87f5_event1-p-800.jpeg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb107636a87f5_event1.jpg 1000w"
                  alt=""
                />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b019f9" className="cover-shape pink" />
              </div>
              <div data-w-id="9744d322-e678-20b2-f573-144ce9b019fa" className="wrap-content">
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b019fb" className="background-2" />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b019fc" className="container-paragraph">
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b019fd" className="main-paragraph-2 white card">
                    Friday,
                    <br />
                    November 15, 2021
                    <br />
                    Dinner 7:00 pm
                  </p>
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b01a03" className="main-paragraph-2 white card">
                    WELL COTTAGE
                    <br />
                    4416 &nbsp;Leo Street, <br />
                    Denver,80216 CO
                  </p>
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a09" className="text-wrapper second">
                  {wedding.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a0b" className="text-span-2 white">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a1f" className="close-wrap hide-cursor">
                  <img
                    src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb122406a87f0_close-01.svg"
                    loading="lazy"
                    alt=""
                    className="main-image"
                  />
                </div>
              </div>
            </div>
            <div id="w-node-_9744d322-e678-20b2-f573-144ce9b01a21-13589a9f" className="container-card _2">
              <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a22" className="card-important-people first hide-cursor">
                <div className="text-wrapper hide">
                  {mainCerinomy.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a25" className="text-span-2 black">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="ellipse container-paragraph-story-line-2" />
              </div>
              <div className="container-image-event">
                <img
                  src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb182826a87f1_event2.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 79vw, 470px"
                  srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb182826a87f1_event2-p-500.jpeg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb182826a87f1_event2-p-800.jpeg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb182826a87f1_event2.jpg 1000w"
                  alt=""
                />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a4b" className="cover-shape pink" />
              </div>
              <div className="wrap-content _2">
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a4d" className="background-2 _2" />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a4e" className="container-paragraph second">
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b01a4f" className="main-paragraph-2 white card">
                    Saturday,
                    <br />
                    November 16, 2021
                    <br />
                    3:30 pm
                  </p>
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b01a55" className="main-paragraph-2 white card">
                    ST.PATRICK CHURCH
                    <br />
                    945 &nbsp;Carolina Avenue,
                    <br />
                    DENVER, 80216 CO
                  </p>
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a5b" className="text-wrapper second _2">
                  {mainCerinomy.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a5d" className="text-span-2 white-second">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a80" className="close-wrap hide-cursor">
                  <img
                    src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb122406a87f0_close-01.svg"
                    loading="lazy"
                    alt=""
                    className="main-image"
                  />
                </div>
              </div>
            </div>
            <div id="w-node-_9744d322-e678-20b2-f573-144ce9b01a82-13589a9f" className="container-card">
              <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a83" className="card-important-people first hide-cursor">
                <div className="text-wrapper hide">
                  {weddingParty.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b01a86" className="text-span-2 black-third">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="ellipse _3" />
              </div>
              <div className="container-image-event">
                <img
                  src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb172916a87ec_event3.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 79vw, 470px"
                  srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb172916a87ec_event3-p-500.jpeg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb172916a87ec_event3.jpg 1000w"
                  alt=""
                />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01aac" className="cover-shape pink" />
              </div>
              <div data-w-id="9744d322-e678-20b2-f573-144ce9b01aad" className="wrap-content">
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01aae" className="background-2" />
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01aaf" className="container-paragraph">
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b01ab0" className="main-paragraph-2 white card">
                    Saturday, <br />
                    November 16, 2021
                    <br />
                    7:30 pm
                  </p>
                  <p data-w-id="9744d322-e678-20b2-f573-144ce9b01ab6" className="main-paragraph-2 white card">
                    LOVELAND HOTEL- <br />
                    1511 &nbsp;Roy Alley, <br />
                    DENVER , 80216 CO
                  </p>
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01abc" className="text-wrapper second">
                  {weddingParty.split('').map((letter, index) => {
                    const classNames = letter === ' ' ? 'mx-2' : ''
                    return (
                      <div key={index} className={`overflow ${classNames}`}>
                        <div data-w-id="9744d322-e678-20b2-f573-144ce9b01abe" className="text-span-2 white-third">
                          {letter}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div data-w-id="9744d322-e678-20b2-f573-144ce9b01ae1" className="close-wrap hide-cursor">
                  <img
                    src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643022cb408eb122406a87f0_close-01.svg"
                    loading="lazy"
                    alt=""
                    className="main-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Our-dream" className="link-section wf-section">
        <div className="w-layout-grid grid-section">
          <div id="w-node-_3d65b90d-7cd7-4982-2356-ef65e380298a-13589a9f" className="container-text-2">
            <div
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e380298b"
              style={{
                WebkitTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
              }}
              className="container-heading-hero second"
            >
              <div className="row">
                <p data-w-id="3d65b90d-7cd7-4982-2356-ef65e380298d" style={{ opacity: 0 }} className="citazione second">
                  Your contribution to
                  <br />
                  our dreams...
                </p>
              </div>
            </div>
            <Image src={rightLeaf} loading="lazy" alt="" className="absolute-image-2" />
          </div>
          <div
            id="w-node-_3d65b90d-7cd7-4982-2356-ef65e3802992-13589a9f"
            className="container-image-background"
            style={{
              backgroundImage: image.src,
            }}
          >
            <div
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e3802993"
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                MozTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                msTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                transform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
              }}
              className="backgound-image first"
            />
            <div data-w-id="3d65b90d-7cd7-4982-2356-ef65e3802994" className="backgound-image second" />
            <div
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e3802995"
              style={{
                WebkitTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="cover-shape-2"
            />
          </div>
        </div>
        <div className="w-layout-grid grid">
          <div className="container-image-second fourth-image">
            <div
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e3802998"
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                MozTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                msTransform:
                  'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
                transform: 'translate3d(0, 0, 0) scale3d(1.2, 1.2, 1) rotateX(0) rotateY(0) rotateZ(10deg) skew(0, 0)',
              }}
              className="backgound-image image-first"
            />
            <div data-w-id="3d65b90d-7cd7-4982-2356-ef65e3802999" className="backgound-image image-second" />
            <div
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e380299a"
              style={{
                WebkitTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="cover-shape-2"
            />
            <div className="w-layout-grid grid-2">
              <div className="lista-nozze">
                <a
                  href="#"
                  data-w-id="3d65b90d-7cd7-4982-2356-ef65e380299d"
                  style={{ opacity: 0 }}
                  target="_blank"
                  className="link-wrap w-inline-block"
                >
                  <div className="link-line black" />
                  <h1 className="link-heading">
                    <span className="span-link">
                      Donazione libera con <strong className="bold-text-2">iban♡</strong>→
                    </span>
                  </h1>
                </a>
              </div>
              <div className="lista-nozze">
                <a
                  href="#"
                  data-w-id="3d65b90d-7cd7-4982-2356-ef65e38029a6"
                  style={{ opacity: 0 }}
                  target="_blank"
                  className="link-wrap w-inline-block"
                >
                  <div className="link-line black" />
                  <h1 className="link-heading">
                    <span className="span-link">
                      I soldi non fanno la felicità, ma il <strong className="bold-text">viaggio di nozze</strong>
                      sì...→
                    </span>
                  </h1>
                </a>
              </div>
            </div>
          </div>
          <div className="containedr-link">
            <a
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e38029af"
              style={{ opacity: 0 }}
              target="_blank"
              className="link-wrap w-inline-block"
            ></a>
            <a
              href="#"
              data-w-id="3d65b90d-7cd7-4982-2356-ef65e38029b7"
              style={{ opacity: 0 }}
              target="_blank"
              className="link-wrap w-inline-block"
            >
              <div className="link-line black" />
              <h2 className="link-heading">
                <span className="span-link">
                  Money can&apos;t buy happiness but <br />
                  the <strong className="bold-text-3">honeymoon</strong> can →
                </span>
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
