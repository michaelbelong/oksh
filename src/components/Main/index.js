import "./main.css";
import React, { useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";
import { colors } from '../../custom';
import { Console } from "./Console";
import { Menu } from "./Menu";

const Main = () => {
  const [colorSelected, setColorSelected] = useState(colors.green);
  // useEffect(() => { console.info('color ::', colorSelected) }, [colorSelected])

  return (
    <main>
      <Container maxW="container.lg">
        <Box>
          <Menu
            colors={colors}
            setColorSelected={setColorSelected}
          />
          <Console 
            colorSelected={colorSelected}
          />
        </Box>
        {/* <Box>
          <MiniMap />
        </Box> */}
      </Container>
    </main>
  );
};

export { Main };
