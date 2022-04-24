import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

export function SecurityBox() {
  return (
    <Box
      rounded={'3xl'}
      h={'full'}
      py={4}
      px={6}
      bgGradient={'linear-gradient(45deg, #edeaea 0%, #ffffff 99%)'}
    >
      <Heading
        textAlign={'center'}
        color={'gray.600'}
        textTransform={'uppercase'}
      >
        SAÚDE E SEGURANÇA NO TRABALHO
      </Heading>
      <Flex flexDirection={'row'} gap={3} mt={10}>
        <List spacing={6} fontSize={'2xl'}>
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
          maxH={'350px'}
          alt={'Segurança do Trabalho'}
          mx={'auto'}
        />
      </Flex>
    </Box>
  )
}
