import Image from 'next/image'
import fbIcon from '@/../public/images/fb-icon.svg'
import { brideInformation, groomInformation } from '@/utils/information'
import { BRIDE, GROOM, Role } from '@/constants'

type CardProps = {
  name?: string
  description?: string
  type: Role
}

const Card: React.FC<CardProps> = ({ name, description, type }) => {
  const cardTitle = type.split('').map((char, index) => {
    const className = char === ' ' ? 'mx-2' : ''
    return (
      <div key={index} data-w-id="08913e58-92e3-8376-5a3a-e16c10831ff6" className={`main-text all-caps ${className}`}>
        {char}
      </div>
    )
  })
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
  const text = 'Thông tin cô dâu và chú rể'
  return (
    <div style={{ backgroundColor: 'rgb(251,243,240)' }} className="page-wrapper overflow-hidden">
      <div className="section padding-vertical padding-xxlarge wf-section">
        <div className="container content">
          <div data-w-id="50815278-240b-1352-9c99-0ca220ab0796" className="text-wrapper">
            {text.split('').map((char, index) => {
              const className = char === ' ' ? 'overflow mx-2' : 'overflow'
              return (
                <div key={index} className={className}>
                  <div
                    data-w-id="1daed6c7-50cf-6224-9a98-e86ec4ac0532"
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
                    {char}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="w-layout-grid groom-bride-grid">
            <div className="card">
              <Card type={BRIDE} name={brideInformation.name} />
            </div>
            <Card type={GROOM} name={groomInformation.name} />
          </div>
        </div>
      </div>
    </div>
  )
}
