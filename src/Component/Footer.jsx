'use client'

import { Box, Container, Stack, Text, } from '@chakra-ui/react'

export const Footer=()=> {
  return (
    <Box
    //   bg={useColorModeValue('gray.50', 'gray.900')}
    //   color={useColorModeValue('gray.700', 'gray.200')}
    bg={"gray.300"}
    color={"gray.700"}
    h={200}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Home
          </Box>
          <Box as="a" href={'#'}>
            About
          </Box>
          <Box as="a" href={'#'}>
            Blog
          </Box>
          <Box as="a" href={'#'}>
            Contact
          </Box>
        </Stack>
        <Text>Copyright 2024 © AquariumFishStore. All Rights Reserved. Aquarium Fish Store Trade Mark is registered.</Text>
      </Container>
    </Box>
  )
}