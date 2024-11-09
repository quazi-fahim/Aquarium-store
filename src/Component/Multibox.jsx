import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Multibox = () => {
  const navigate = useNavigate();

  // Handler function for navigation
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      p={4}
    >
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        rowSpan={2}
        position="relative"
        onClick={() => handleClick('/tissue-culture')}
        cursor="pointer"
      >
        <Image
          src="https://www.bunnycart.com/pub/media/wysiwyg/Buy_Aquatic_Plants_online_in_India.jpg"
          alt="Tissue Culture Aquatic Plants"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>

      <GridItem
        colSpan={1}
        position="relative"
        onClick={() => handleClick('/aquarium-substrate')}
        cursor="pointer"
      >
        <Image
          src="https://www.bunnycart.com/pub/media/wysiwyg/smartwave/home/Tissue_Culture_Aquatic_Plants.jpg"
          alt="Aquarium Substrate"
          objectFit="cover"
          w="90%"
          h="100%"
        />
      </GridItem>

      <GridItem
        colSpan={1}
        position="relative"
        onClick={() => handleClick('/aquatic-plants')}
        cursor="pointer"
      >
        <Image
          src="https://www.bunnycart.com/pub/media/wysiwyg/Buy_Aquarium_Substrate_online.jpg"
          alt="Aquatic Plants"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>

      <GridItem
        colSpan="300px"
        position="relative"
        onClick={() => handleClick('/aquarium-fish')}
        cursor="pointer"
      >
        <Image
          src="https://www.bunnycart.com/pub/media/wysiwyg/Aquatic_Plants_in_Wholesale_New.png"
          alt="Aquarium Fish"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>

      <GridItem
        colSpan={{ base: 2, md: 2 }}
        position="relative"
        onClick={() => handleClick('/pet-store-owner')}
        cursor="pointer"
      >
        <Image
          src="https://www.bunnycart.com/pub/media/wysiwyg/Buy_Aquarium_fish_online.jpg"
          alt="Pet Store Owner"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>
    </Grid>
  )
}

export default Multibox
