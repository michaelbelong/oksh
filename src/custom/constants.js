import { ReactThemes } from "react-terminal-component";

export const COPY_LABEL = "π²πΎπΏπΈπ΄π³ Ξ";
export const CHAR_LIMIT = 280;

export const colors = {
  green: "hsl(155, 100%, 43%)",
  blue: "hsl(216, 100%, 50%)",
  purple: "hsl(281, 100%, 50%)",
  yellow: "hsl(39, 100%, 50%)",
  pink: "hsl(323, 100%, 50%)"
};

export const terminalProps = {
  promptSymbol: "πΎπΊππ·-π·.πΆΞ ",
  clickToFocus: true,
  autoFocus: false,
  theme: {
    ...ReactThemes.default,
    background: "black",
    promptSymbolColor: "hsl(155, 100%, 43%)",
    outputColor: "hsl(155, 100%, 23%)",
    commandColor: "hsl(155, 100%, 43%)"
  }
};

// export const COMMANDS = [
//   "πππππ",
//   "ππππ’",
//   "πππππππ’",
//   "ππππ",
//   "πππππ",
//   "ππππππ",

//   "π²ππππ",
//   "π²πππ’",
//   "π·ππππππ’",
//   "π·πππ",
//   "πΏππππ",
//   "πΏπππππ"
// ];

// export const BODY_TABLE = {
//   commands: {
//     row: ["Commands", "Description"],
//     col: [
//       { key: 1, command: "clear", description: "to empty console" },
//       { key: 2, command: "copy", description: "to add to clipboard" },
//       { key: 3, command: "history", description: "to view history" },
//       { key: 4, command: "help", description: "to view help" },
//       { key: 5, command: "print", description: "to display output" },
//       { key: 6, command: "prompt", description: "to change prompt symbol" }
//     ]
//   },
//   controls: {
//     row: ["Controls", "Description"],
//     col: [
//       { key: 1, control: "press 'tab'", description: "to autofill keyword" },
//       { key: 2, control: "press 'enter'", description: "to copy output" },
//       { key: 3, control: "click 'execute'", description: "to copy output" },
//       { key: 4, control: "press 'shift + /'", description: "to show help" },
//       { key: 5, control: "press '/'", description: "to focus on console" }
//     ]
//   }
// };

export const SOCIAL_LINKS = [
  {
    key: 1,
    text: "Twitter",
    link: "https://twitter.com/okpcnft"
  },
  {
    key: 2,
    text: "Discord",
    link: "https://discord.gg/okpc"
  },
  {
    key: 3,
    text: "Zora",
    link:
      "https://zora.co/collections/0x7183209867489E1047f3A7c23ea1Aed9c4E236E8"
  },
  {
    key: 4,
    text: "OpenSea",
    link: "https://opensea.io/collection/okpc"
  },
  {
    key: 5,
    text: "LooksRare",
    link:
      "https://looksrare.org/collections/0x7183209867489E1047f3A7c23ea1Aed9c4E236E8"
  }
];
