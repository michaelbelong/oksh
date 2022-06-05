import "./menu.css";
import React from "react";
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
  const handleClickColor = (event) => setColorSelected(colors[event.target.value]);

  return (
    <HStack mb={4} spacing="16px" bg="black">

      <TypeMode
      handleClick={handleClick}
      text={text} />

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
