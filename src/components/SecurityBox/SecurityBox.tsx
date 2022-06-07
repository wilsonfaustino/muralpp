import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

export function SecurityBox() {
  return (
    <Box
      rounded={'3xl'}
      minH={'693px'}
      p={8}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bgGradient={'linear-gradient(45deg, #edeaea 0%, #ffffff 99%)'}
    >
      <Stack direction={'column'} spacing={20}>
        <Heading fontSize={'6xl'} color={'gray.700'}>
          Saúde e Segurança no trabalho
        </Heading>
        <Flex flexDirection={'row'} gap={3} mt={10} alignItems={'center'}>
          <List spacing={6} fontSize={'3xl'} fontWeight={'bold'}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Colocamos a saúde e a segurança em primeiro lugar.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Seguimos todas as as normas e os procedimentos de segurança.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Nos ajude a manter um ambiente seguro e livre de acidentes.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Utilize os EPIs fornecidos pela empresa.
            </ListItem>
          </List>
          <Image
            rounded={'md'}
            src={'/Seguranca-trabalho-EPI.png'}
            maxH={'400px'}
            alt={'Segurança do Trabalho'}
            mx={'auto'}
          />
        </Flex>
      </Stack>
    </Box>
  )
}
