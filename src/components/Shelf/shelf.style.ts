import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`

export const InnerCarousel = styled(motion.div)`
  display: flex;
`

export const CarouselItem = styled(motion.div)`
  min-height: 40rem;
  width: 30rem;
  padding: 40px;
`