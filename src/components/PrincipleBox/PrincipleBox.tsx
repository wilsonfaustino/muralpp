import { Box, Center, Circle, Heading, Text, VStack } from '@chakra-ui/react'

import type { PrincipleBoxProps } from './types'

export function PrincipleBox({
  title,
  description,
  icon = null,
}: PrincipleBoxProps) {
  return (
    <Box
      bgGradient={'linear-gradient(45deg, #edeaea 0%, #ffffff 99%)'}
      rounded={'md'}
      p={4}
      alignItems={'center'}
      h={'full'}
    >
      <Heading textAlign={'center'} color={'gray.600'}>
        {title}
      </Heading>
      <Center my={4}>
        <Circle
          size={'40px'}
          bg={'red.500'}
          color={'white'}
          position={'relative'}
          _before={{
            content: `""`,
            display: 'block',
            width: '130px',
            height: '2px',
            background: 'gray.300',
            left: '20',
            top: '50%',
            position: 'absolute',
          }}
          _after={{
            content: `""`,
            display: 'block',
            width: '130px',
            height: '2px',
            background: 'gray.300',
            right: '20',
            top: '50%',
            position: 'absolute',
          }}
        >
          {icon}
        </Circle>
      </Center>
      <Text textAlign={'center'} color={'gray.600'} fontSize={'2xl'}>
        {description}
      </Text>
    </Box>
  )
}
