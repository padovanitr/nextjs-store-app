import { storeColors } from '@/utils/colors'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const ShelfContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShelfTitle = styled.h1`
  font-size: 1.5rem !important;
  color: ${storeColors.darkGrey};
  font-size: 600px;
  padding: 0 40px;
  margin: 0;
`

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`

export const InnerCarousel = styled(motion.div)`
  display: flex;
`

export const CarouselItem = styled(motion.div)`
  min-height: 10rem;
  width: 30rem;
  padding: 20px 40px;

  img {
    pointer-events: none;
  }
`