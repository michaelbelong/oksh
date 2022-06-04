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
} from '../../../custom'

const consoleState = EmulatorState.create({
  'commandMapping': CommandMapping.create({})
})

export const useTerminal = () => {
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
    if (value.length >= CHAR_LIMIT) return null
    const textGenerated = fancify(value, 'math mono')
    setInput(textGenerated)
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