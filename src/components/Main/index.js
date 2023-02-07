import "./main.css";
import React, { useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";
import { colors, TEXT_INPUT_MODES } from '../../custom';
import { Console } from "./Console";
import { Menu } from "./Menu";


const Main = () => {
  const [colorSelected, setColorSelected] = useState(colors.green);
  
  const [typeMode, setTypeMode] = useState(TEXT_INPUT_MODES);
  
  const [counter, setCounter] = useState(0);
  
  const handleClick = (event) => {
    if (counter < 3) {
      setCounter(counter + 1)
    }else {
      setCounter(0)
    };
  };
  
  const inputValue = typeMode[counter].value;
  const inputSelected = typeMode[counter].text;
  
  return (
    <main>
      <Container maxW="container.lg">
        <Box>
          <Menu
            colors={colors}
            setColorSelected={setColorSelected}
            handleClick={handleClick}
            text={inputSelected}
          />
          <Console 
            colorSelected={colorSelected}
            text={inputSelected}
            value={inputValue}
            counter={counter}
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
