import "./header.css";
import React from "react";
import { Flex, Spacer, Box, HStack, Link } from "@chakra-ui/react";
import { Logo } from "./Logo";
import Bubbles from "../../assets/Bubbles.svg"
const Header = () => {
  return (
    <header>
      <Flex bg="black" color="ui.gray.500">
        <Box p="4">
          <HStack spacing="24px" bg="black">
            <Box w="32px" h="32px">
            <Link
            href="https://www.okpc.app/"
            variant="none"
            isExternal
            >
              <Logo />
            </Link>
            </Box>
            <Box>okshell</Box>
            <Spacer />
          </HStack>
        </Box>
        <Spacer />
        <Box p="4">
          <Box w="32px" h="32px">
            <Link
            href="https://www.ppuunnkk.com/"
            variant="none"
            _hover={{ color: 'hsl(323, 100%, 50%)'}}
            isExternal
            >
            P
            </Link>
          </Box>
        </Box>
      </Flex>
    </header>
  );
};

export { Header };
