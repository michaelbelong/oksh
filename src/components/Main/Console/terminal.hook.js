import { useState } from 'react'
import fancify from 'fancify'
import {
  EmulatorState, 
  OutputFactory, 
  CommandMapping,
  Outputs, 
} from 'javascript-terminal'
import { 
  useCopyToClipboard,
  CHAR_LIMIT,
  terminalProps,
  TEXT_INPUT_MODES
} from '../../../custom'

const consoleState = EmulatorState.create({
  'commandMapping': CommandMapping.create({})
})

export const useTerminal = (counter) => {
  const { isCopied, makeCopy } = useCopyToClipboard()
  const [ emulatorState, setEmulator ] = useState(consoleState)
  const [ inputStr, setInput ] = useState('')
  // const [ text, setText ] = useState('')

  const handleExecute = () => {
    let newEmulatorState;
    const defaultOutputs = emulatorState.getOutputs();
    const textOutput = OutputFactory.makeTextOutput('𝙾𝙺𝚂𝙷-𝟷.𝟶Ξ ' + inputStr);
    const newOutputs = Outputs.addRecord(defaultOutputs, textOutput);
    newEmulatorState = emulatorState.setOutputs(newOutputs);

    makeCopy(inputStr)
    setEmulator(newEmulatorState)
    setInput('')
  }

  const onStateChange = (state) => {
    // console.info('state ::', state)
    handleExecute()
  }

  const onInputChange = (value) => {
    console.log(TEXT_INPUT_MODES[counter].text)
    if (value.length >= CHAR_LIMIT) return null

    if (TEXT_INPUT_MODES[counter].text=="AA") {
      const upperCase = value.toUpperCase();
      console.log(upperCase);
      setInput(upperCase);
    } else if (TEXT_INPUT_MODES[counter].text=="Aa") {

        function toTitleCase(str) {
          str = str.toLowerCase().split(' ');
          for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
          }
          return str.join(' ');
        }
        const titleCase = toTitleCase(value)
        console.log(titleCase);
        setInput(titleCase);

    } else if (TEXT_INPUT_MODES[counter].text=="aa") {
      const lowerCase = value.toLowerCase();
      console.log(lowerCase);
      setInput(lowerCase);
    } else if (TEXT_INPUT_MODES[counter].text=="FF") {
        // const freeForm = 
        setInput(value);
    }
    
    // const titleCase = value
    // const textGenerated = fancify(value, 'math mono')
    // setInput(textGenerated)
    // setInput(value)
    
  }


  terminalProps['inputStr'] = inputStr
  terminalProps['emulatorState'] = emulatorState
  terminalProps['onStateChange'] = onStateChange
  terminalProps['onInputChange'] = onInputChange


  return {
    isCopied,
    emulatorState, 
    setEmulator,
    inputStr, 
    setInput,
    handleExecute,
    onInputChange,
    onStateChange,
    terminalProps,
  }
}