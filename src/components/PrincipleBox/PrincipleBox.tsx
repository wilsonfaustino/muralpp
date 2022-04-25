import { Box, Center, Circle, Heading, Text } from '@chakra-ui/react'

import type { PrincipleBoxProps } from './types'

export function PrincipleBox({
  title,
  description,
  icon,
  active = false,
}: PrincipleBoxProps) {
  return (
    <Box
      bgGradient={'linear-gradient(45deg, #edeaea 0%, #ffffff 99%)'}
      rounded={'3xl'}
      p={4}
      alignItems={'center'}
      h={'full'}
      pos={'relative'}
      transition={'all 0.3s ease-in-out'}
      transform={active ? 'scale(1.03)' : 'scale(1)'}
      boxShadow={active ? '0px 5px 5px rgba(0, 0, 0, 0.3)' : 'none'}
      border={active ? '2px solid gray' : 'none'}
    >
      <Heading
        textAlign={'center'}
        color={'gray.600'}
        fontWeight={active ? 'bold' : 'normal'}
      >
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
      <Text
        textAlign={'center'}
        color={'gray.600'}
        fontSize={'2xl'}
        fontWeight={active ? 'normal' : 'light'}
      >
        {description}
      </Text>
    </Box>
  )
}
