import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Blur from "../../utils/Blur";

export default function CTAWithVideo() {
  return (
    <Container maxW={'7xl'}>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Aymeric Toulouse,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              fullstack javascript developer
            </Text>
          </Heading>
          <Text>
            Welcome over here ! <br/>
            I'm a 27 yo french developer from 42 Paris (atoulous).<br/>
            Started from scratch in 2015 with C and vim.<br/>
            I love JavaScript ecosystem and building things with latest features of its languages.<br/>
            I want to use my skills for positive impact projects.<br/>
            Curently in Bordeaux, ok to move after pandemic time !<br/>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
              leftIcon={<FaLinkedin />}
            >
              <Link isExternal target={'_blank'} href={'https://www.linkedin.com/in/aymeric-toulouse-19a768b7'}>LinkedIn</Link>
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<FaGithub />}
            >
              <Link isExternal target={'_blank'} href={'https://github.com/atoulous'}>Github</Link>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Blur
        position={'absolute'}
        top={16}
        left={0}
        style={{ filter: 'blur(80px)' }}
      />
    </Container>
  );
}
