import { Box } from '@chakra-ui/react'

import { PersonCard } from '../PersonCard'
import { Slider } from '../Slider'

import { personsData as persons } from './personsData'
// import type { BirthDaySliderProps } from './types'

const sliderSettings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export function BirthDaySlider() {
  return (
    <Box rounded={'md'} p={4} h={'full'} pos={'relative'}>
      <Slider settings={sliderSettings}>
        {persons.map((person) => (
          <PersonCard
            key={person.name}
            name={person.name}
            date={person.date}
            role={person.role}
            image={person.image}
          />
        ))}
      </Slider>
      <Box
        w={'full'}
        h={'150px'}
        zIndex={'1'}
        pos={'absolute'}
        bottom={'-10px'}
        left={0}
        bgImage="url('/birthday-cake.png')"
        bgPos={'bottom center'}
        bgSize={'300px'}
        bgRepeat={'no-repeat'}
      ></Box>
    </Box>
  )
}
