// import type { MothersDaySliderProps } from './types'
import { Box } from '@chakra-ui/react'
import SlickSlider from 'react-slick'

import { ImgCampaign } from '../ImgCampaign'
import { SecurityBox } from '../SecurityBox'

const sliderSettings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
}

export function SecondarySlider() {
  return (
    <Box>
      <SlickSlider {...sliderSettings}>
        <SecurityBox />
        <ImgCampaign imgSrc={'/campanha_agasalho/campanha_agasalho_2022.jpg'} />
        <ImgCampaign imgSrc={'/alerts/Protejase.jpg'} />
      </SlickSlider>
    </Box>
  )
}
