import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    ui: {
      gray: {
        500: 'hsl(0, 0%, 50%)',
        800: 'hsl(0, 0%, 14%)',
        900: 'hsl(0, 0%, 2%)',
      },
      whiteAlpha: 'rgba(255, 255, 255, 0.16)',
      green: 'hsl(155, 100%, 43%)',
      blue: 'hsl(216, 100%, 50%)',
      purple: 'hsl(281, 100%, 50%)',
      yellow: 'hsl(39, 100%, 50%)',
      pink: 'hsl(323, 100%, 50%)',
    }
  },
  fonts: {
    heading: 
      ['Projection', '-apple-system', 'BlinkMacSystemFont',
      "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol"],
    body: 
      ["JetBrains Mono", '-apple-system', 'BlinkMacSystemFont',
      "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol"],
    mono: 
      ["JetBrains Mono", '-apple-system', 'BlinkMacSystemFont',
      "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol"],
    copy: 
      ["JetBrains Mono", '-apple-system', 'BlinkMacSystemFont',
      "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol"],
  },
  styles: {
    global: {
      'body': {
        color: 'white',
        backgroundColor: 'black',
        fontFamily: 'font.body',
      },
      '*::-webkit-scrollbar': {
          width: '1rem'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'hsl(0, 0%, 30%)'
      },
      '*::-webkit-scrollbar-track': {
        background: 'hsl(0, 0%, 14%)'
      },
    },
  },
})

const ThemeProvider = (props) => (
  <ChakraProvider theme={theme} {...props} />
)

export { ThemeProvider }