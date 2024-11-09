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
        <Link to="/signin">Signup</Link>
        <Link to="/contact">Contact Us</Link>
      </Flex>

      {/* Logo section with responsive styling */}
      <Flex
        as="nav"
        align="center"
        justify="flex-start"
        wrap="wrap"
        height="100px"
        color="#fff"
      >
        <Link to="/">
          <Box width={"90px"} height={"90px"} >
            <Image
              src="https://i.postimg.cc/sgB3TTG1/Logo-Aquarium-Fish-Store.png"
              alt="Aquarium Fish Store"
              ml="20px"
              width="100%"
              height="100%"
            />
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
