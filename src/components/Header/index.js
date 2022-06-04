import "./header.css";
import React from "react";
import { Flex, Spacer, Box, HStack } from "@chakra-ui/react";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <header>
      <Flex bg="black" color="ui.gray.500">
        <Box p="4">
          <HStack spacing="24px" bg="black">
            <Box w="32px" h="32px">
              <Logo />
            </Box>
            <Box>okshell</Box>
            <Spacer />
          </HStack>
        </Box>
        <Spacer />
        <Box p="4">
          <Box w="32px" h="32px">
            I
          </Box>
        </Box>
      </Flex>
    </header>
  );
};

export { Header };
