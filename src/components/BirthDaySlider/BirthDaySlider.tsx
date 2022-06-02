import { Box, Heading } from '@chakra-ui/react'

import { PersonCard } from '../PersonCard'
import { Slider } from '../Slider'

import { personsData as persons } from './personsDataJune'
// import type { BirthDaySliderProps } from './types'

const sliderSettings = {
  dots: false,
  arrows: false,
  // fade: true,
  vertical: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
}

export function BirthDaySlider() {
  // const bgHeight = useBreakpointValue({
  //   base: '90px',
  //   md: '115px',
  //   lg: '120px',
  // })
  // const bgSize = useBreakpointValue({ base: '150px', md: '200px', lg: '280px' })
  return (
    <Box rounded={'md'} px={'auto'} pos={'relative'} mx={'auto'}>
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
      <Heading
        textAlign={'center'}
        fontSize={'6xl'}
        px={24}
        mt={6}
        color={'whiteAlpha.900'}
      >
        Aniversariantes do Mês
      </Heading>
      {/* <Box
        w={'full'}
        h={bgHeight}
        zIndex={'1'}
        pos={'absolute'}
        bottom={'-30px'}
        left={0}
        bgImage="url('/birthday-cake.png')"
        bgPos={'bottom -25px center'}
        bgSize={bgSize}
        bgRepeat={'no-repeat'}
      ></Box> */}
    </Box>
  )
}
