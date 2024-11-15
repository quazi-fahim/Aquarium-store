import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button,  Input, Text, } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import { clearError, setEmailOrMobile, setError, signInUser } from "../Redux/Signin/Action";

const Signin = () => {
  const emailOrMobile = useSelector((state) => state.sign.emailOrMobile);
  const loading = useSelector((state) => state.sign.loading);
  const error = useSelector((state) => state.sign.error);
  const isLoggedIn = useSelector((state) => state.sign.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');  // Redirect to homepage after successful sign in
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (emailOrMobile.length < 10) {
      dispatch(setError("Please enter a valid mobile number or email"));
      return;
    }

    dispatch(signInUser({ contact: emailOrMobile }));
  };

  return (
    <Box w={{ base: "90%", md: "400px" }} mx="auto" mt="50px" p={5} borderWidth={1} borderRadius="30px">
      <Text as="b" p="5" fontSize="34px" ml="50px">Sign in to </Text>
      <Text as="b" p="5" fontSize="32px"> Aquarium Fish Store </Text>
    

      {error && (
        
          
          {error}
       
      )}

      <form onSubmit={handleSubmit}>
        
         Mobile Number or Email
          <Input
            type="text"
            value={emailOrMobile}
            onChange={(e) => dispatch(setEmailOrMobile(e.target.value))}
            placeholder="Enter your mobile number or email"
          />
        
        
        <Button
          type="submit"
          bgGradient="linear-gradient(to-br, #89216b, #da4453)"
          color="#fff"
          isLoading={loading}
          mt={4}
        >
          Sign In
        </Button>
      </form>

      <Button
        onClick={() => navigate('/signup')}
        variant="link"
        mt={4}
      >
        Don't have an account? Sign Up
      </Button>
    </Box>
  );
};

export default Signin;

