import { useRef, useEffect, useState } from 'react';
import products from '../../../products.json'
import Card from '../Card/page';
import { Carousel, InnerCarousel, CarouselItem } from './shelf.style';

export default function Shelf() {
  const [width, setWidth] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null as null | HTMLDivElement)

  useEffect(() => {
    if (carouselRef && carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  return (
    <Carousel ref={carouselRef}>
      <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <Card {...product} />
          </CarouselItem>
        ))}
      </InnerCarousel>
    </Carousel>
  )
}
