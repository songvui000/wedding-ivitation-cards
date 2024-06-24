import Image from 'next/image'

import image from '@/../public/images/IMG_3465.jpg'
import image2 from '@/../public/images/20230507184426_IMG_1667.jpg'
import image3 from '@/../public/images/IMG_7710.jpg'
import image4 from '@/../public/images/IMG_7658.jpg'

export default function SpecialMoment() {
  return (
    <div className="special-memories wf-section">
      <div data-w-id="6be5981b-2d91-dfa4-c33f-bc737d9cb048" className="container-copy content-copy">
        <div data-w-id="0f790750-1da8-68da-7d35-d31606ee666d" className="text-wrapper">
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee666f" className="main-heading-2 h3">
              S
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6672" className="main-heading-2 h3">
              p
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6675" className="main-heading-2 h3">
              e
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6678" className="main-heading-2 h3">
              c
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee667b" className="main-heading-2 h3">
              i
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee667e" className="main-heading-2 h3">
              a
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6681" className="main-heading-2 h3">
              l
            </div>
          </div>
          <div className="overflow margin">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6684" className="main-heading-2 h3">
              M
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6687" className="main-heading-2 h3">
              o
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee668a" className="main-heading-2 h3">
              m
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee668d" className="main-heading-2 h3">
              e
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6690" className="main-heading-2 h3">
              n
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6693" className="main-heading-2 h3">
              t
            </div>
          </div>
          <div className="overflow">
            <div data-w-id="0f790750-1da8-68da-7d35-d31606ee6696" className="main-heading-2 h3">
              s
            </div>
          </div>
          <div className="overflow" />
        </div>
        <div
          data-w-id="6be5981b-2d91-dfa4-c33f-bc737d9cb077"
          style={{ opacity: 0 }}
          className="wrap-image-memories-copy"
        >
          <Image src={image} loading="lazy" alt="" className="memories-image absolute-1" />
          <Image
            src={image2}
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 27vw"
            alt=""
            className="memories-image absolute-2"
          />
          <Image
            src={image3}
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 25vw"
            alt=""
            className="memories-image absolute-4"
          />
          <Image
            src={image4}
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 41vw"
            alt=""
            className="memories-image absolute-3"
          />
          <div className="text-block">SWEET MEMORIES</div>
        </div>
      </div>
    </div>
  )
}
