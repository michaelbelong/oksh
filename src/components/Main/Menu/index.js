import "./menu.css";
import React, { useState } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { TypeMode } from "./TypeMode";

const styleProps = {
  w: "32px",
  h: "40px",
  borderRadius: "0",
  _hover: {
    bg: 'auto'
  }
};

const Menu = ({ colors, setColorSelected, handleClick, text }) => {
const [selectedColor, setSelectedColor] = useState("ui.green");
const [showColors, setShowColors] = useState(false);

const handleClickColor = (event) => {
  setColorSelected(colors[event.target.value]);
  setSelectedColor(`ui.${event.target.value}`);
  setShowColors(false);
};

  return (
    <>
      <HStack mb={4} spacing="16px" bg="black">
        <TypeMode
        handleClick={handleClick}
        text={text} />

        <Button
          {...styleProps}
          className="btn"
          bg={showColors ? "transparent" : selectedColor}
          value={selectedColor}
          border={showColors ? "3px solid #AAA" : "none"}
          onClick={() => setShowColors(!showColors)}
        />
        
        {showColors && (
        <HStack spacing="16px">
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
        )}
      </HStack>
      
      
    </>
  );
};

export { Menu };
