import "./console.css";
import React from "react";
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

const Console = ({ colorSelected }) => {
  const { isCopied, handleExecute, terminalProps } = useTerminal();

  terminalProps.theme['promptSymbolColor'] = colorSelected
  terminalProps.theme['outputColor'] = colorSelected
  terminalProps.theme['commandColor'] = colorSelected

  return (
    <Box className="console">
      <Terminal {...terminalProps} />

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
