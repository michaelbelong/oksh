import "./menu.css";
import React from "react";
import { Button, HStack } from "@chakra-ui/react";

const TEXT_INPUT_MODES = [
  {
    key: 9,
    text: "AA",
    value: "uppercase"
  },
  {
    key: 9,
    text: "Aa",
    value: "capitalize"
  },
  {
    key: 9,
    text: "aa",
    value: "lowercase"
  },
  {
    key: 9,
    text: "FF",
    value: "none"
  }
];

const styleProps = {
  w: "32px",
  h: "40px",
  borderRadius: "0",
  _hover: {
    bg: 'auto'
  }
};

const Menu = ({ colors, setColorSelected }) => {
  const handleClickColor = (event) => setColorSelected(colors[event.target.value]);

  return (
    <HStack mb={4} spacing="16px" bg="black">
      <Button 
        {...styleProps} 
        bg="ui.gray.500" 
        color="black"
      >AA
      </Button>

      <Button
        {...styleProps}
        className="btn"
        bg="ui.green"
        value="green"
        onClick={handleClickColor}
      />
      <Button
        {...styleProps}
        className="btn"
        bg="ui.blue"
        value="blue"
        onClick={handleClickColor}
      />
      <Button
        {...styleProps}
        className="btn"
        bg="ui.purple"
        value="purple"
        onClick={handleClickColor}
      />
      <Button
        {...styleProps}
        className="btn"
        bg="ui.yellow"
        value="yellow"
        onClick={handleClickColor}
      />
      <Button
        {...styleProps}
        className="btn"
        bg="ui.pink"
        value="pink"
        onClick={handleClickColor}
      />
    </HStack>
  );
};

export { Menu };
