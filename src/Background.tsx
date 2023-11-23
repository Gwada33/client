import Image from 'next/image'
import background from '../public/image.png'
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        zIndex: -10,
        objectFit: 'cover',
      }}
    />
  )
}