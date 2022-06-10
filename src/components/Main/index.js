import "./main.css";
import React, { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import { colors, TEXT_INPUT_MODES } from '../../custom';
import { Console } from "./Console";
import { Menu } from "./Menu";

const Main = () => {
  const [ colorSelected, setColorSelected ] = useState(colors.green);

  const [ counter, setCounter ] = useState(0);
  
  const handleClick = (event) => {
    if (counter < 3) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  
  const inputText = TEXT_INPUT_MODES[counter].text;
  
  return (
    <main>
      <Container maxW="container.lg">
        <Box w="100%">
          <Menu
            colors={colors}
            setColorSelected={setColorSelected}
            handleClick={handleClick}
            text={inputText}
          />
          <Console 
            colorSelected={colorSelected}
            counter={counter}
          />
        </Box>
      </Container>
    </main>
  );
};

export { Main };
