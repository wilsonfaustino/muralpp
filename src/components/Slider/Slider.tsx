import { Box } from '@chakra-ui/react'
import SlickSlider from 'react-slick'

import type { SliderProps } from './types'

export function Slider({ children, settings }: SliderProps) {
  return (
    <Box pos={'relative'} maxW={'400px'} mt={'-25px'} pt={'15px'} mx={'auto'}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Box>
  )
}
