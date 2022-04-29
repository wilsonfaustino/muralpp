import { Center, Flex, Image } from '@chakra-ui/react'

import { dateFormat } from '~/utils/dateFormat'

import type { WeatherFooterProps } from './types'

export function WeatherFooter({ weatherData }: WeatherFooterProps) {
  return (
    <Flex
      w={'full'}
      h={'110px'}
      px={8}
      alignItems={'center'}
      justifyContent={'space-between'}
      bgColor={'gray.100'}
      boxShadow={'0px -2px 4px rgba(0, 0, 0, 0.1)'}
      borderTop={'2px solid'}
      borderColor={'gray.400'}
    >
      <Center
        w={'300px'}
        h={'90px'}
        fontFamily={'heading'}
        border={'2px dashed gray'}
        borderRadius={'lg'}
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        {`Vila Clementino, ${dateFormat()}`}
      </Center>
      <Center
        w={'300px'}
        h={'90px'}
        fontFamily={'heading'}
        border={'2px dashed gray'}
        borderRadius={'lg'}
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        {weatherData?.weather[0]?.description} Icon:{' '}
        <Image
          src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
        />
      </Center>
      <Image src={'/logoPaintPack.svg'} h={'70px'} />
    </Flex>
  )
}
