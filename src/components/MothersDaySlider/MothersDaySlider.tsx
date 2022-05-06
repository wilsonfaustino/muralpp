// import type { MothersDaySliderProps } from './types'
import { Box, Heading, Image } from '@chakra-ui/react'
import SlickSlider from 'react-slick'

import { Slider } from '../Slider'

const mothers = {
  ALINE: {
    title: 'Aline e Bia',
    image: {
      source: '/mothersday/Aline_e_Bia.jpeg',
      alt: 'Aline e Bia',
    },
  },
  CAROLA: {
    title: 'Carola e Gatinhos',
    image: {
      source: '/mothersday/Carola.jpeg',
      alt: 'Carola e Gatinhos',
    },
  },
  LUANA: {
    title: 'Luana e Simba',
    image: {
      source: '/mothersday/Luana_e_Simba.jpeg',
      alt: 'Luana e Simba',
    },
  },
  MARCIA: {
    title: 'Marcia e Gabriel',
    image: {
      source: '/mothersday/Marcia_e_Gabriel.jpeg',
      alt: 'Marcia e Gabriel',
    },
  },
  MARISA: {
    title: 'Marisa e Gustavo',
    image: {
      source: '/mothersday/Marisa_e_Gustavo.jpeg',
      alt: 'Marisa e Gustavo',
    },
  },
  MILENA: {
    title: 'Milena e suas plantas',
    image: {
      source: '/mothersday/Milena.jpeg',
      alt: 'Milena e suas plantas',
    },
  },
  CRIS: {
    title: 'Cristina e Joana',
    image: {
      source: '/mothersday/Cristina_e_Joana.jpeg',
      alt: 'Cristina e Joana',
    },
  },
  NOEME: {
    title: 'Noeme e Jamile',
    image: {
      source: '/mothersday/Noeme_e_Jamile.jpeg',
      alt: 'Noeme e Jamile',
    },
  },
  RITA: {
    title: 'Rita, Pedro, Joice e Puguinha',
    image: {
      source: '/mothersday/Rita.jpeg',
      alt: 'Rita, Pedro, Joice e Puguinha',
    },
  },
  FINAL: {
    title: 'Final',
    image: {
      source: 'dia_das_maes.jpg',
      alt: 'Final',
    },
  },
}

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
}

export function MothersDaySlider() {
  return (
    <Box w={'1920px'} h={'1080px'}>
      <SlickSlider {...sliderSettings}>
        {Object.entries(mothers).map(([key, { title, image }]) => (
          <Box key={key} w={'1920px'} h={'full'} pos={'relative'}>
            <Image
              src={image.source}
              alt={image.alt}
              w={'1920px'}
              h={'1080px'}
              fit={title === 'Final' ? 'cover' : 'contain'}
              align={'center'}
              mx={'auto'}
            />
            {title !== 'Final' && (
              <>
                <Image
                  src={'/logoPaintPackWhite.svg'}
                  h={'30px'}
                  position={'absolute'}
                  top={6}
                  right={6}
                />
                <Box
                  p={6}
                  pos={'absolute'}
                  right={'300px'}
                  bottom={10}
                  bgColor={'red.500'}
                  opacity={0.8}
                  rounded={'lg'}
                  boxShadow={'lg'}
                >
                  <Heading
                    textAlign={'center'}
                    fontSize={'5xl'}
                    color={'gray.100'}
                  >
                    {title}
                  </Heading>
                </Box>
              </>
            )}
          </Box>
        ))}
      </SlickSlider>
    </Box>
  )
}
