import Image from 'next/image'
import dot1 from '@/../public/images/dot1.svg'
import dot2 from '@/../public/images/dot2.svg'
import dot3 from '@/../public/images/dot3.svg'
import bg1 from '@/../public/images/bg1.svg'
export default function OurLove() {
  const text = 'Our Loveline'
  return (
    <section id="Story" data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04be" className="history-line wf-section">
      <div data-w-id="562d1323-d205-cc38-d2fe-d63d261b6b95" className="text-wrapper">
        {text.split('').map((letter, index) => {
          const className = letter === ' ' ? 'margin' : ''
          return (
            <div className={`overflow ${className}`} key={index}>
              <div
                data-w-id="4416e1b2-25d4-c52b-1f91-719f3d5b973b"
                style={{
                  WebkitTransform:
                    'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="main-heading-2 h3"
              >
                {letter}
              </div>
            </div>
          )
        })}
      </div>
      <p className="paragraph-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non condimentum purus, vel venenatis massa.
        Vestibulum sed condimentum lacus.
      </p>
      <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04de" className="w-layout-grid history-grid">
        <div id="w-node-fd6a5e69-250e-4dd4-1d33-87841d1a04df-13589a9f" className="collumn">
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04e0" className="module-image">
            <div
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="story-image"
            >
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2).jpg"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, (max-width: 1439px) 26vw, 23vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2)-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2)-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2).jpg 1000w"
                alt=""
                className="image-timeline loveline"
              />
            </div>
            <div
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="story-image-2"
            >
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643007452a3df9d2e9da2a20_60dc280d54163b5bd561bc63_ourstory2.jpg"
                loading="lazy"
                alt=""
                className="image-loveline-second"
              />
            </div>
            <div className="bg first">
              <Image src={dot1} loading="lazy" alt="" className="image-6 _2" />
            </div>
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04e6" className="container-paragraph-story-line second">
            <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04e7" className="wrap-heading _2">
              <h2
                data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04e8"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="main-heading-3 dark all-caps-none"
              >
                Serendipity
              </h2>
            </div>
            <p
              data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04f6"
              style={{
                WebkitTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
              }}
            >
              Donec lobortis porta egestas. Donec sed tortor nisl. Aliquam pellentesque commodo sem a tristique. Morbi
              tristique luctus velit, vel volutpat leo ultricies finibus.
            </p>
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04f8" className="module-image">
            <div className="story-image bottom" />
            <div className="story-image-2 bottom">
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3.jpg"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 30vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3.jpg 1000w"
                alt=""
                className="image-loveline-second"
              />
            </div>
            <div className="bg third">
              <Image src={dot3} loading="lazy" alt="" className="image-6 _2 _4" />
            </div>
          </div>
        </div>
        <div className="collumn">
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a04ff" className="point margin-top" />
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0500" className="line-story" />
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0501" className="point margin _2" />
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0502" className="line-story" />
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0503" className="point margin _2" />
        </div>
        <div className="collumn second">
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0506" className="container-paragraph-story-line">
            <div className="wrap-heading _2">
              <h2
                data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0508"
                style={{
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0,
                }}
                className="main-heading-3 dark all-caps-none"
              >
                First time we met
              </h2>
            </div>
            <p
              data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a050e"
              style={{
                WebkitTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
              }}
            >
              Cras at odio non nisl congue pretium. Nullam mattis justo vel velit feugiat imperdiet non vel arcu. Sed
              sed leo et ipsum interdum mollis.
            </p>
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0510" className="module-image">
            <div className="story-image _2">
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4.jpg"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 27vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4.jpg 1000w"
                alt=""
                className="image-loveline-second"
              />
            </div>
            <div style={{ opacity: 0 }} className="bg">
              <Image src={dot2} loading="lazy" alt="" className="image-6" />
            </div>
            <div className="story-image-2 _2" />
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0516" className="container-paragraph-story-line">
            <div className="wrap-heading _2">
              <h2
                data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0518"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="main-heading-3 dark all-caps-none"
              >
                Together, always
              </h2>
            </div>
            <p
              data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0528"
              style={{
                WebkitTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0,
              }}
            >
              Pellentesque ultrices tincidunt dui, molestie dictum nulla volutpat at. Nulla mi augue, iaculis id ligula
              et, imperdiet fringilla magna. Maecenas efficitur eget diam sit amet commodo. Integer nibh nulla, tempus
              ut elit a, elementum sollicitudin lacus.
            </p>
          </div>
        </div>
      </div>
      <Image src={bg1} loading="lazy" alt="" className="image-3" />
      <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a052b" className="w-layout-grid history-grid-2 mobile">
        <div id="w-node-fd6a5e69-250e-4dd4-1d33-87841d1a052c-13589a9f" className="collumn mobile">
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a052d" className="module-image-2 _1">
            <div
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(37%, 58%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="story-image-3"
            >
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2).jpg"
                loading="lazy"
                sizes="(max-width: 479px) 82vw, (max-width: 991px) 389px, 100vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2)-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2)-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/64300746bb99288d34d41e48_60dc28011f3a80051b49e488_ourstory1-(2).jpg 1000w"
                alt=""
                className="image-timeline"
              />
            </div>
            <div
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="story-image-4"
            >
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/643007452a3df9d2e9da2a20_60dc280d54163b5bd561bc63_ourstory2.jpg"
                loading="lazy"
                alt=""
                className="image-loveline-second"
              />
            </div>
            <div className="bg-2 first" />
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0533" className="container-paragraph-story-line-2">
            <div className="wrap-heading _2">
              <h2 className="main-heading-4 dark all-caps-none">First time we met</h2>
            </div>
            <p
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="main-paragraph-3 dark normal"
            >
              Cras at odio non nisl congue pretium. Nullam mattis justo vel velit feugiat imperdiet non vel arcu. Sed
              sed leo et ipsum interdum mollis.
            </p>
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a053d" className="module-image-2 _2">
            <div className="story-image-3 _2">
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, 100vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe35cd2f4a4bba08b8b9b_60dc2824fe688e7e9af7e8d8_ourstory4.jpg 1000w"
                alt=""
                className="image-loveline-second"
              />
            </div>
            <div style={{ opacity: 0 }} className="bg-2" />
            <div
              style={{
                opacity: 0,
                WebkitTransform:
                  'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(-55%, -47%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="story-image-4"
            />
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0543" className="container-paragraph-story-line-2 second">
            <div className="wrap-heading _2">
              <h2 className="main-heading-4 dark all-caps-none">Serendipity</h2>
            </div>
            <p
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="main-paragraph-3 dark normal"
            >
              Donec lobortis porta egestas. Donec sed tortor nisl. Aliquam pellentesque commodo sem a tristique. Morbi
              tristique luctus velit, vel volutpat leo ultricies finibus.
            </p>
          </div>
          <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a0555" className="module-image-2 _2">
            <div className="story-image-4 bottom">
              <img
                src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, 100vw"
                srcSet="https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3-p-500.jpg 500w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3-p-800.jpg 800w, https://assets.website-files.com/642d591ca8b0b718dc589a9b/642fe369f56ab3bb898c9417_60dc274f4f985717b2b23dee_ourstory3.jpg 1000w"
                alt=""
                className="image-loveline-second"
              />
            </div>
          </div>
        </div>
        <div data-w-id="fd6a5e69-250e-4dd4-1d33-87841d1a055b" className="container-paragraph-story-line-2">
          <div className="wrap-heading _2">
            <h2 className="main-heading-4 dark all-caps-none">Together always </h2>
          </div>
          <p
            style={{
              opacity: 0,
              WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            }}
            className="main-paragraph-3 dark normal"
          >
            Pellentesque ultrices tincidunt dui, molestie dictum nulla volutpat at. Nulla mi augue, iaculis id ligula
            et, imperdiet fringilla magna. Maecenas efficitur eget diam sit amet commodo. Integer nibh nulla, tempus ut
            elit a, elementum sollicitudin lacus.
          </p>
        </div>
        <div className="collumn center">
          <div className="point margin-top" />
          <div className="line-story" />
          <div className="point margin" />
          <div className="line-story" />
          <div className="point margin" />
          <div className="line-story" />
        </div>
        <div className="collumn second" />
      </div>
    </section>
  )
}
