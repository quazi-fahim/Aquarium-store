import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      {/* Top navigation for links */}
      <Flex
        as="nav"
        align="center"
        justify="flex-end"
        wrap="wrap"
        p={4}
        backgroundColor="#212121"
        color="#fff"
        height="50px"
        gap="20px"
      >
        <Link to="/faq">FAQ</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/contact">Contact Us</Link>
      </Flex>

      {/* Logo section with responsive styling */}

      <Flex
        as="nav"
        align="center"
        justify="Space-Between"
        wrap="wrap"
        height="100px"
        color="#fff"
        bg={"green.400"}
        pl={4}
        pr={4}
      >
        <Link to="/">
          <Box width={"90px"} height={"90px"}>
            <Image
              src="https://i.postimg.cc/sgB3TTG1/Logo-Aquarium-Fish-Store.png"
              alt="Aquarium Fish Store"
              ml="20px"
              width="100%"
              height="100%"
            />
          </Box>
        </Link>
        <Box color="black" fontFamily={"bold"} fontSize={20}>
          <Link to="/cart" >Cart</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
