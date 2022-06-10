import { useEffect, useState } from 'react'
import { normalizeUnicodeText } from 'normalize-unicode-text'
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

function toTitleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
};

function convertInput(value, counter) {
  if (TEXT_INPUT_MODES[counter].text === "AA") {
    const upperCase = value.toUpperCase();
    value = upperCase;
  } else if (TEXT_INPUT_MODES[counter].text === "Aa") {
    const titleCase = toTitleCase(value);
    value = titleCase;
  } else if (TEXT_INPUT_MODES[counter].text === "aa") {
    const lowerCase = value.toLowerCase();
    value = lowerCase;
  } else if (TEXT_INPUT_MODES[counter].text === "FF") {
    value = value;
  } else {
    console.warn('value ?', value);
  }
  return value;
};

const toMonospace = (text) => fancify(text, 'math mono');

const consoleState = EmulatorState.create({
  'commandMapping': CommandMapping.create({})
});

export const useTerminal = (counter) => {
  const { isCopied, makeCopy } = useCopyToClipboard()
  const [ emulatorState, setEmulator ] = useState(consoleState)
  const [ inputStr, setInput ] = useState('')
  const [ originalStr, setOriginal ] = useState('')

  useEffect(() => {
    const text = convertInput(originalStr, counter);
    const textGenerated = toMonospace(text);

    setOriginal(text);
    setInput(textGenerated);
  }, [ counter ]);

  const handleExecute = () => {
    let newEmulatorState;
    const defaultOutputs = emulatorState.getOutputs();
    const textOutput = OutputFactory.makeTextOutput(terminalProps.promptSymbol + ' ' + inputStr);
    const newOutputs = Outputs.addRecord(defaultOutputs, textOutput);
    newEmulatorState = emulatorState.setOutputs(newOutputs);

    makeCopy(inputStr)
    setEmulator(newEmulatorState)
    setInput('')
    setOriginal('')
  };

  const onInputChange = (value) => {
    if (value.length >= CHAR_LIMIT) return null;

    const textNormalized = normalizeUnicodeText(value);
    const text = convertInput(textNormalized, counter);
    const textGenerated = toMonospace(text);
    
    setOriginal(text);
    setInput(textGenerated);
  };

  const onStateChange = (state) => {
    // console.info('state ::', state)
    handleExecute()
  };


  terminalProps['inputStr'] = inputStr;
  terminalProps['emulatorState'] = emulatorState;
  terminalProps['onStateChange'] = onStateChange;
  terminalProps['onInputChange'] = onInputChange;


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
  };
};