import { Box } from '@chakra-ui/react'
import SlickSlider from 'react-slick'

import type { SliderProps } from './types'

export function Slider({ children, settings }: SliderProps) {
  return (
    <Box pos={'relative'} maxW={'400px'} zIndex={1} mt={'-25px'} pt={'15px'}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Box>
  )
}
