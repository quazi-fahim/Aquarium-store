import { Box, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
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

const Descriptionpage = () => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold">
        {product.name}
      </Text>
      <Image src={product.imageUrl} alt={product.name} my={4} w="100%" maxH="400px" objectFit="contain" />
      <Text color="gray.500" fontSize="lg" fontWeight="bold">
        ₹{product.price.toFixed(2)}
      </Text>
      <Text mt={4}>{product.description}</Text>
    </Box>
  );
};

export default Descriptionpage;