import Image from 'next/image'
import leftLeaf from '@/../public/images/left-leaf.svg'
import rightLeaf from '@/../public/images/right-leaf.svg'
import flower from '@/../public/images/flower.svg'
export default function ParallaxSection() {
  return (
    <div className="parallax-image wf-section">
      <Image src={rightLeaf} loading="lazy" alt="" className="absolute-image" />
      <Image src={flower} loading="lazy" alt="" className="absolute-inage _3" />
      <Image src={rightLeaf} loading="lazy" alt="" className="absolute-inage" />
    </div>
  )
}
