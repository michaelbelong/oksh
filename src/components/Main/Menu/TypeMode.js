import { useState } from "react"
import { Button } from "@chakra-ui/react"

const styleProps = {
  w: "32px",
  h: "40px",
  borderRadius: "0",
  _hover: {
	bg: 'auto'
  }
};

export const TypeMode = ({handleClick,text}) => {

  return (
 	<Button 
		{...styleProps} 
		bg="ui.gray.500" 
		color="black"
		onClick={handleClick}
  	>
	  {text}
  	</Button>

)}