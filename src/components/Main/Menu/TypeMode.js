import React from "react";
import { Button } from "@chakra-ui/react";

export const TypeMode = ({styleProps, handleClick, text}) => {
  return (
		<Button 
			{...styleProps} 
			bg="ui.gray.500" 
			color="black"
			onClick={handleClick}
			>
			{text}
  	</Button>
	);
};