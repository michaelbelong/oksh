import "./header.css";
import React from "react";
import { Flex, Spacer, Box, Button, HStack, Link, Image } from "@chakra-ui/react";
import { Logo } from "./Logo";
import Bubbles from "./bubbles.png"
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
            <Box pointerEvents="none">okshell</Box>
            <Spacer />
          </HStack>
        </Box>
        <Spacer />
        <Box p="4">
          <Box w="32px" h="32px">
            <Link
            href="https://www.ppuunnkk.com/"
            variant="none"
            isExternal
            >
            <Image src={Bubbles} />
            </Link>
          </Box>
        </Box>
      </Flex>
    </header>
  );
};

export { Header };
