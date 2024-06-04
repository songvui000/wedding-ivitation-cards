import Image from 'next/image'
import fbIcon from '@/../public/images/fb-icon.svg'
import { brideInformation, groomInformation } from '@/app/utils/information'

type CardProps = {
  name?: string
  description?: string
  type: 'Cô dâu' | 'Chú rể'
}
const Card: React.FC<CardProps> = ({ name, description, type }) => {
  const cardTitle = type.split('').map((char, index) => (
    <div key={index} data-w-id="08913e58-92e3-8376-5a3a-e16c10831ff6" className="main-text all-caps">
      {char}
    </div>
  ))
  return (
    <div data-w-id="08913e58-92e3-8376-5a3a-e16c10831ff4" className="content-card static">
      <div className="wrapper-text">{cardTitle}</div>
      <h4 className="main-heading-2 h4">{name}</h4>
      <p className="main-paragraph-2 center">
        {description}
        Nam semper augue sit amet facilisis dignissim. Ut eget consectetur felis. Sed sollicitudin dolor a feugiat
        luctus.
      </p>
      <div className="w-layout-grid social-grid">
        <a
          id="w-node-_08913e58-92e3-8376-5a3a-e16c10832005-10831ff4"
          href="#"
          className="social-link hide-cursor w-inline-block"
        >
          <Image src={fbIcon} loading="lazy" alt="" className="main-image" />
        </a>
      </div>
    </div>
  )
}
export default function Information() {
  const brideText = 'Bride'
  const groomText = 'Groom'
  return (
    <div style={{ backgroundColor: 'rgb(251,243,240)' }} className="page-wrapper overflow-hidden">
      <div className="section padding-vertical padding-xxlarge wf-section">
        <div className="container content">
          <div data-w-id="50815278-240b-1352-9c99-0ca220ab0796" className="text-wrapper">
            {brideText.split('').map((char, index) => (
              <div key={index} className="overflow">
                <div
                  data-w-id="1daed6c7-50cf-6224-9a98-e86ec4ac0532"
                  style={{
                    WebkitTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    MozTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    msTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  }}
                  className="main-heading-2 h3"
                >
                  {char}
                </div>
              </div>
            ))}
            <div className="overflow mx-10">
              <div
                data-w-id="1daed6c7-50cf-6224-9a98-e86ec4ac0532"
                style={{
                  WebkitTransform:
                    'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                className="main-heading-2 h3"
              >
                &amp;
              </div>
            </div>
            {groomText.split('').map((char, index) => (
              <div key={index} className="overflow">
                <div
                  data-w-id="1daed6c7-50cf-6224-9a98-e86ec4ac0532"
                  style={{
                    WebkitTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    MozTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    msTransform:
                      'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  }}
                  className="main-heading-2 h3"
                >
                  {char}
                </div>
              </div>
            ))}
          </div>
          <div className="w-layout-grid groom-bride-grid">
            <div className="card">
              <Card type="Cô dâu" name={brideInformation.name} />
            </div>
            <Card type="Chú rể" name={groomInformation.name} />
          </div>
        </div>
      </div>
    </div>
  )
}
