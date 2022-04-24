import { Box, Center, Heading } from '@chakra-ui/react'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

import { IconMission } from '../IconMission'
import { IconValues } from '../IconValues'
import { IconVision } from '../IconVision'
import { PrincipleBox } from '../PrincipleBox'

import { companyValues } from './CompanyValues'
import type { SliderCompanyValuesProps } from './types'

export function SliderCompanyValues() {
  const settings = {
    // className: 'center',
    arrows: false,
    // centerMode: true,
    infinite: true,
    autoplay: true,
    // centerPadding: '100px',
    autoplaySpeed: 2000,
    slidesToShow: 1,
    speed: 500,
  }
  return (
    <Slider {...settings}>
      {/* <PrincipleBox
            title={'Nossa Missão'}
            description={
              'Desenvolver serviços inovadores para o mercado de embalagem, tornando o fluxo de trabalho de pessoas e empresas mais inteligentes e integrados.'
            }
            icon={<IconMission />}
          />
          <PrincipleBox
            title={'Nossa Visão'}
            description={
              'Ser referência na América do Sul em inovação para o mercado de embalagem.'
            }
            icon={<IconVision />}
          />
          <PrincipleBox
            title={'Nossos Valores'}
            description={
              'Respeito às pessoas, à Diversidade e ao Meio Ambiente Responsabilidade • Ética e Transparência • Qualidade Inovação • Pontualidade • Paixão.'
            }
            icon={<IconValues />}
          /> */}
      <Center w={'full'} h={'xs'} bg={'papayawhip'} mx={6}>
        1
      </Center>
      <Center w={'full'} h={'xs'} bg={'papayawhip'} mx={6}>
        2
      </Center>
      <Center w={'full'} h={'xs'} bg={'papayawhip'} mx={6}>
        3
      </Center>
      <Center w={'full'} h={'xs'} bg={'papayawhip'} mx={6}>
        4
      </Center>
      <Center w={'full'} h={'xs'} bg={'papayawhip'} mx={6}>
        5
      </Center>
    </Slider>
  )
}
