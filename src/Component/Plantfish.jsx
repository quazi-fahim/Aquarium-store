import { Box, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const products = [
    {id:1, name: "Red Water Lily", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/r/e/red_water_lily.jpg" },
    { id:2,name: "Java Fern", price: 149.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/m/i/microsorum_pteropus_wrinkled_leaf_3.jpg" },
    {id:3, name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/a/n/anubias_nana_long_wavy_.jpg" },
    {id:4, name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/a/n/anubias_dragon_claw_.jpg" },
    { id:5,name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/a/n/anubias_butterfly_.jpg" },
    { id:6,name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/b/a/bacopa_salzmannii_purple_sg.jpg" },
    { id:7,name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/m/a/marsilea_hirsuta_1.jpg" },
    { id:8,name: "Anubias nana", price: 200.00, imageUrl: "https://www.bunnycart.com/pub/media/catalog/product/cache/79659cf168631810dec5ba2bba540f81/b/o/bolbitis_heteroclita_difformis_1.png" },
   
  ];

const Plantfish = () => {
  return (
    <Box p={3} textAlign="center" mt="50px"  m="50px">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        AQUATIC PLANTS & FISH
      </Text>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={4}
      >
        {products.map((product) => (
          <GridItem
            key={product.id}
            border="1px solid #e2e8f0"
            borderRadius="md"
            overflow="hidden"
            _hover={{ boxShadow: "lg" }}
          >
            <Link to={`/product/${product.id}`}>
              <VStack spacing={2} p={4}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h="150px"
                />
                <Text fontWeight="medium" isTruncated w="100%">
                  {product.name}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold">
                  ₹{product.price.toFixed(2)}
                </Text>
              </VStack>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Plantfish;
