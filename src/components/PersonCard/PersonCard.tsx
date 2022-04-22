import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import type { PersonCardProps } from './types'

{
  /* <img src="https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1.jpeg" alt="" srcset="https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1.jpeg 400w, https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1-300x300.jpeg 300w, https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1-150x150.jpeg 150w, https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1-50x50.jpeg 50w" sizes="(max-width: 400px) 100vw, 400px" style="max-height: 456.8px;" class="active"></img> */
}

const IMAGE =
  'https://paintpack.com.br/wp-content/uploads/2022/04/Mirian-Barros-1.jpeg'

export function PersonCard({ prop = 'PersonCard' }: PersonCardProps) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Míriam Barros
          </Heading>
          <Text fontWeight={800} fontSize={'xl'}>
            20/04/2022
          </Text>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Manutenção
          </Text>
        </Stack>
      </Box>
    </Center>
  )
}
