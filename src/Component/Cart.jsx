import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/Cart.jsx/cartaction';

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Calculate the total price, considering quantities
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 100);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, change) => {
        // Dispatch action to update the quantity of the item in the cart
        dispatch(updateQuantity(id, change));
    };

    return (
        <Box p={4}>
            <Text textAlign="center" fontSize={28} fontWeight="bold" mb={6}>
                Shopping Cart
            </Text>

            <Center>
                <Box w="full" maxW="1000px" boxShadow="md" p={4} borderRadius="md" bg="white">
                    {cartItems.length === 0 ? (
                        <Text textAlign="center">Your cart is empty.</Text>
                    ) : (
                        <VStack spacing={4}>
                            {cartItems.map(item => (
                                <HStack
                                    key={item.id}
                                    w="full"
                                    justify="space-between"
                                    align="center"
                                    p={4}
                                    borderWidth={1}
                                    borderRadius="md"
                                    boxShadow="sm"
                                >
                                    <Text>{item.name}</Text>
                                    <Text>Price: ${item.price}</Text>
                                    <Text>Quantity: {item.quantity}</Text>

                                    <HStack>
                                        <Button 
                                            colorScheme="blue" 
                                            onClick={() => handleUpdateQuantity(item.id, 1)}
                                        >
                                            +
                                        </Button>
                                        <Button 
                                            colorScheme="blue" 
                                            onClick={() => handleUpdateQuantity(item.id, -1)}
                                            isDisabled={item.quantity <= 1} // Prevent decreasing quantity below 1
                                        >
                                            -
                                        </Button>
                                        <Button colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>
                                            Remove
                                        </Button>
                                    </HStack>
                                </HStack>
                            ))}

                            <Box
                                w="full"
                                p={4}
                                bg="black"
                                color="white"
                                borderRadius="md"
                                boxShadow="md"
                            >
                                <Text>Shipping will be $100 for local area</Text>
                                <Text fontWeight="bold">Total Price: ${totalPrice.toFixed(2)}</Text>
                            </Box>
                        </VStack>
                    )}
                </Box>
            </Center>
        </Box>
    );
};

export default Cart;
