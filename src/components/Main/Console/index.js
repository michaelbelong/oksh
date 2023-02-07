import "./console.css";
import React, { useEffect, useRef } from "react";
import { Box, Flex, Tooltip, Button } from "@chakra-ui/react";
import { ReactTerminalStateless as Terminal } from "react-terminal-component";
import { COPY_LABEL } from "../../../custom";
import { useTerminal } from "./terminal.hook";

const Execute = ({ Children, text, isCopied, colorSelected, ...rest }) => (
  <Tooltip hasArrow placement="left" label={COPY_LABEL} isOpen={isCopied}>
    <Button bg={colorSelected} color="black" borderRadius={0} {...rest}>
      {Children || text}
    </Button>
  </Tooltip>
);

const Console = ({ colorSelected, text, value, counter }) => {
  
  const { isCopied, handleExecute, terminalProps } = useTerminal(counter);
  
  console.log(text, value, counter);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current.focus();
  }, []);

  terminalProps.theme['promptSymbolColor'] = colorSelected
  terminalProps.theme['outputColor'] = colorSelected
  terminalProps.theme['commandColor'] = colorSelected

  return (
    <Box className="console">
      <Terminal ref={terminalRef} {...terminalProps} />

      <Flex mt={4} justifyContent="flex-end">
        <Execute
          text="EXECUTE"
          colorSelected={colorSelected}
          isCopied={isCopied}
          onClick={handleExecute}
        />
      </Flex>
    </Box>
  );
};

export { Console };
