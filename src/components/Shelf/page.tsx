import { useRef, useEffect, useState } from "react";
import Card from "../Card/page";
import { Carousel, InnerCarousel, CarouselItem, ShelfTitle, ShelfContainer } from "./shelf.style";

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export interface Rating {
  rate: number;
  count: number;
}

interface ShelfProps {
  category?: string;
  products: Products[];
  categoryLabel?: string
}

export default function Shelf({ category, products, categoryLabel }: ShelfProps) {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null as null | HTMLDivElement);

  const filtedProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  useEffect(() => {
    if (carouselRef && carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <ShelfContainer>
      {categoryLabel && <ShelfTitle>{categoryLabel}</ShelfTitle>}
      <Carousel ref={carouselRef}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {filtedProducts.map((product) => (
            <CarouselItem key={product.id}>
              <Card {...product} />
            </CarouselItem>
          ))}
        </InnerCarousel>
      </Carousel>
    </ShelfContainer>
  )
}
