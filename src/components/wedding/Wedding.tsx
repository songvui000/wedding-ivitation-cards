import HeroSection from '@/components/wedding/HeroSection'
import Information from '@/components/wedding/Information'
import OurLove from '@/components/wedding/OurLove'
import ParallaxSection from '@/components/wedding/ParallaxSection'
import SpecialMoment from '@/components/wedding/SpecialMoment'
import Image from 'next/image'
import flower1 from '@/../public/images/flower1.svg'
import footer from '@/../public/images/footer.svg'
import ImportantPeople from '@/components/wedding/ImportantPeople'
import EventParties from '@/components/wedding/EventParties'
import { weddingInformation } from '../../utils/information'

export default function Wedding() {
  return (
    <>
      <HeroSection />
      <div style={{ backgroundColor: 'rgb(251,243,240)' }} className="page-wrapper overflow-hidden">
        <Information />
        <ParallaxSection />
        <SpecialMoment />
        <OurLove />
      </div>
      <div className="parallax">
        <p id="typed" udesly-typewriter="Fino ad arrivare al giornodel nostro “Sì”" className="citazione">
          Towards the <strong className="gold">perfect</strong> day
        </p>
      </div>
      <div className="fixed-text">
        <h2 className="bg-heading">{weddingInformation.date}</h2>
        <Image src={flower1} loading="lazy" alt="" className="image-7" />
      </div>
      <div style={{ backgroundColor: 'rgb(251,243,240)' }} className="page-wrapper overflow-hidden">
        <ImportantPeople />
        <EventParties />
      </div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div data-w-id="106c25f9-0dbd-7023-d98c-4ec9faa7c54f" className="container-link-menu">
            <div style={{ opacity: 0 }} className="nav-link">
              OUR STORY
            </div>
            <div className="div-block">
              <a href="#Story" className="point margin pink w-inline-block" />
            </div>
          </div>
          <div data-w-id="106c25f9-0dbd-7023-d98c-4ec9faa7c556" className="container-link-menu">
            <div style={{ opacity: 0 }} className="nav-link">
              WHEN AND WHERE
            </div>
            <div className="div-block">
              <a href="#When-and-where" className="point margin pink w-inline-block" />
            </div>
          </div>
        </nav>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div data-w-id="106c25f9-0dbd-7023-d98c-4ec9faa7c55e" className="container-link-menu">
            <div style={{ opacity: 0 }} className="nav-link">
              OUR DREAMS
            </div>
            <div className="div-block">
              <a href="#Our-dream" className="point margin pink w-inline-block" />
            </div>
          </div>
          <div data-w-id="106c25f9-0dbd-7023-d98c-4ec9faa7c565" className="container-link-menu">
            <div style={{ opacity: 0 }} className="nav-link">
              CONTACT
            </div>
            <div className="div-block">
              <a href="#contact" className="point margin pink w-inline-block" />
            </div>
          </div>
        </nav>
        <div className="line-menu animate__height h-0" />
      </div>
      <div data-w-id="b1c10a02-630d-05d8-e8ca-829ce299ade2">
        <div className="text-block-2">RSVP</div>
        <div data-w-id="20cdd7c9-b4ec-2177-ed9b-cf3ba4e7ab09" style={{ height: '0%' }} className="line-rsvp" />
      </div>
      <div className="navbar _3">
        <div className="line-top animate__width w-0" />
      </div>
      <div style={{ display: 'none', width: '0%' }} className="rspv">
        <div style={{ opacity: 0 }} className="column">
          <h3 className="heading second">Any questions?</h3>
          <p className="paragraph-4">
            <em>Please let us know if you will be able to make it.</em>
          </p>
          <p className="paragraph-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Suspendisse varius enim in eros elementum tristique. Duis cursus.
          </p>
          <div>
            <div className="column-faq">
              <div data-w-id="513aeb4a-f8d0-15e9-6192-583e7d582a7d" className="faq-question-wrap-2">
                <div className="faq-heading-wrapper">
                  <h4 className="faq-heading">Info about accomodation.</h4>
                  <div className="bulled" />
                </div>
                <div style={{ height: '0PX' }} className="faq-content-2">
                  <p className="faq-paragraph-wrapper">
                    Donec condimentum augue ut elit fermentum vehicula. Ut tortor tellus, tristique convallis est nec.
                    <br />
                  </p>
                </div>
              </div>
              <div data-w-id="2440de29-9a24-8fb9-08b0-1dcfd16be717" className="faq-question-wrap-2">
                <div className="faq-heading-wrapper">
                  <h4 className="faq-heading">What time should i arrive?</h4>
                  <div className="bulled" />
                </div>
                <div style={{ height: '0PX' }} className="faq-content-2">
                  <p className="faq-paragraph-wrapper">
                    Suspendisse interdum velit eget nunc euismod, quis commodo odio fermentum. Aliquam a volutpat augue,
                    id maximus sapien. <br />
                  </p>
                </div>
              </div>
              <div
                data-w-id="a8a1cf61-87f2-8929-bcad-165c8d728163"
                style={{ opacity: 0 }}
                className="faq-question-wrap-2"
              >
                <div className="faq-heading-wrapper">
                  <h4 className="faq-heading">Is there a dress code?</h4>
                  <div className="bulled" />
                </div>
                <div className="faq-content-2">
                  <p className="faq-paragraph-wrapper">
                    Praesent porttitor laoreet est ac mollis. Donec condimentum augue ut elit fermentum vehicula.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="column-faq">
              <div data-w-id="513aeb4a-f8d0-15e9-6192-583e7d582a85" className="faq-question-wrap-2">
                <div className="faq-heading-wrapper">
                  <h4 className="faq-heading">Can bring my kids?</h4>
                  <div className="bulled" />
                </div>
                <div style={{ height: '0PX' }} className="faq-content-2">
                  <p className="faq-paragraph-wrapper">
                    Ut tortor tellus, tristique convallis est nec, viverra molestie lacus.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-block w-form">
          <form
            method="get"
            name="email-form"
            data-name="Email Form"
            style={{ opacity: 0 }}
            data-w-id="c6952a42-42b9-0abe-a29d-7de560673591"
            id="email-form"
            className="form"
          >
            <h3 className="heading">RSVP</h3>
            <p className="paragraph-3">
              Kindly respond by july 25TH, 2023.
              <strong>
                <br />
              </strong>
            </p>
            <input
              type="text"
              className="text-field w-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder="Your Name"
              id="name"
              required
            />
            <input
              type="email"
              className="text-field w-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder="Your Email"
              id="email"
              required
            />
            <input
              type="number"
              className="text-field w-input"
              maxLength={256}
              name="email-2"
              data-name="Email 2"
              placeholder="Number of Persons"
              id="email-2"
              required
            />
            <select id="field" name="field" data-name="Field" required className="text-field w-select">
              <option>Meal Preferences</option>
              <option value="I can eat averything">I can eat averything</option>
              <option value="Vegan">Vegan</option>
              <option value="No meat">No meat</option>
              <option value="Lactose free">Lactose free</option>
              <option value="Gluten free">Gluten free</option>
            </select>
            <div className="row">
              <label className="radio-button-field w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio w-radio-input" />
                <input
                  type="radio"
                  data-name="Radio"
                  id="radio"
                  name="radio"
                  defaultValue="Radio"
                  required
                  style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                />
                <span className="radio-button-label w-form-label">Accept</span>
              </label>
              <label className="radio-button-field w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio w-radio-input" />
                <input
                  type="radio"
                  data-name="Radio 2"
                  id="radio-2"
                  name="radio"
                  defaultValue="Radio"
                  required
                  style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                />
                <span className="radio-button-label-2 w-form-label">Decline</span>
              </label>
            </div>
            <input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button w-button" />
          </form>
          <div className="success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div data-w-id="1f50becf-0657-3aa2-3a7d-f76986d6534f" className="div-block-2">
          <img
            src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64426416ffd7a9744da72d78_643022cb408eb122406a87f0_close-01%20(1)-01.svg"
            loading="lazy"
            alt=""
            className="image-9"
          />
        </div>
        <img
          src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/64301f79e55d3f355fa83c4c_6510277-01.svg"
          loading="lazy"
          style={{ opacity: 0 }}
          alt=""
          className="bsolute-image"
        />
        <img
          src="https://assets.website-files.com/642d591ca8b0b718dc589a9b/6430200b59e6e060b809b141_ff-01.svg"
          loading="lazy"
          style={{ opacity: 0 }}
          alt=""
          className="bsolute-image-copy"
        />
      </div>
      <div id="contact" className="footer">
        <Image
          src={footer}
          loading="lazy"
          alt=""
          className="image-8"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
        <h1 className="main-heading-2 h4 white normal">Caroline &amp;Taylor</h1>
        <div
          data-w-id="cfe6d2c5-2624-fa99-4fe0-ae4dee1ee57d"
          style={{
            WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            opacity: 0,
          }}
          className="container-heading-citazione"
        >
          <p className="quote white footer-heading">D</p>
          <p className="quote white footer-heading">e</p>
          <p className="quote white footer-heading">n</p>
          <p className="quote white footer-heading">v</p>
          <p className="quote white footer-heading">e</p>
          <p className="quote white footer-heading">r -</p>
          <p className="quote white footer-heading margin">N</p>
          <p className="quote white footer-heading">o</p>
          <p className="quote white footer-heading">v</p>
          <p className="quote white footer-heading">e</p>
          <p className="quote white footer-heading">m</p>
          <p className="quote white footer-heading">b</p>
          <p className="quote white footer-heading">e</p>
          <p className="quote white footer-heading">r</p>
          <p className="quote white footer-heading margin">1</p>
          <p className="quote white footer-heading">6,</p>
          <p className="quote white footer-heading">2</p>
          <p className="quote white footer-heading">0</p>
          <p className="quote white footer-heading">2</p>
          <p className="quote white footer-heading">1</p>
        </div>
        <div className="w-layout-grid grid-3">
          <div className="container-info-footer">
            <div
              data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e10"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="container-heading-citazione"
            >
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e11"
                style={{
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0,
                }}
                className="quote white"
              >
                C
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e13"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                a
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e15"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                r
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e17"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                o
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e19"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                l
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e1b"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                i
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e1d"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                n
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e1f"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                e
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e21"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white margin"
              >
                M
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e23"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                e
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e25"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                n
              </p>
              <p
                data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e27"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                d
              </p>
              <p className="quote white">e</p>
              <p className="quote white">l </p>
            </div>
            <p
              data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e2d"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="footer-info margin-top"
            >
              2157 Summit Street
            </p>
            <p
              data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e2f"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="footer-info _2"
            >
              52001-Dubuque
            </p>
            <p
              data-w-id="7d02ccfa-ff83-14ff-4603-89b840c14e31"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="phone"
            >
              +39 338 222 222
            </p>
          </div>
          <div className="container-info-footer">
            <div
              data-w-id="f1084c31-add6-e371-5e2e-8363d4021748"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="container-heading-citazione"
            >
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021749"
                style={{
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  opacity: 0,
                }}
                className="quote white"
              >
                T
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d402174b"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                a
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d402174d"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                y
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d402174f"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                l
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021751"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                o
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021753"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                r
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021755"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white margin"
              >
                S
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021757"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                m
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d4021759"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                i
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d402175b"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                t
              </p>
              <p
                data-w-id="f1084c31-add6-e371-5e2e-8363d402175d"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(50px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="quote white"
              >
                h
              </p>
            </div>
            <p
              data-w-id="f1084c31-add6-e371-5e2e-8363d402175f"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="footer-info margin-top"
            >
              4675 Frum StreetKm.
            </p>
            <p
              data-w-id="f1084c31-add6-e371-5e2e-8363d4021761"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="footer-info _2"
            >
              55402 -Minneapolis
            </p>
            <p
              data-w-id="f1084c31-add6-e371-5e2e-8363d4021763"
              style={{
                opacity: 0,
                WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              }}
              className="phone"
            >
              +39 338 222 222
            </p>
          </div>
        </div>
        <a href="#" className="back-to-top w-inline-block" />
      </div>
    </>
  )
}
