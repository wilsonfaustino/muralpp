import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'

import type { PersonCardProps } from './types'

export function PersonCard({ name, date, role, image }: PersonCardProps) {
  return (
    <Center py={6}>
      <Box
        role={'group'}
        p={6}
        maxW={'380px'}
        w={'full'}
        bg={'white'}
        boxShadow={'lg'}
        rounded={'3xl'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'2xl'}
          mt={-12}
          pos={'relative'}
          height={'270px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
        >
          <Image
            rounded={'2xl'}
            height={280}
            width={320}
            mx={'auto'}
            objectFit={'cover'}
            src={image}
          />
          <Tag
            pos={'absolute'}
            bottom={'10px'}
            right={0}
            size={'lg'}
            fontFamily={'heading'}
            fontWeight={'bold'}
            fontSize={'2xl'}
            colorScheme={'orange'}
            boxShadow={'md'}
          >
            {date}
          </Tag>
        </Box>
        <Stack pt={7} align={'center'} mt={'-5px'} spacing={1}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Divider />
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {role}
          </Text>
        </Stack>
      </Box>
    </Center>
  )
}
