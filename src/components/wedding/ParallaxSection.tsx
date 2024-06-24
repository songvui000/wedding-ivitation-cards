import Image from 'next/image'
import leftLeaf from '@/../public/images/left-leaf.svg'
import rightLeaf from '@/../public/images/right-leaf.svg'
import flower from '@/../public/images/flower.svg'
import image from '@/../public/images/K1A16361.jpg'

export default function ParallaxSection() {
  return (
    <div
      className="parallax-image wf-section"
      style={{
        backgroundImage: `linear-gradient(rgba(141, 143, 141, .48), rgba(141, 143, 141, .48)), url(${image.src})`,
      }}
    >
      <Image src={leftLeaf} loading="lazy" alt="" className="absolute-image" />
      <Image src={flower} loading="lazy" alt="" className="absolute-inage _3" />
      <Image src={rightLeaf} loading="lazy" alt="" className="absolute-inage" />
    </div>
  )
}
