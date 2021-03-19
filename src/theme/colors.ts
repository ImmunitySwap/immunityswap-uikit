import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#CE2029",
  primaryBright: "#9B111E",
  primaryDark: "#D0253C",
  secondary: "#8B0000",
  success: "#009F6B",
  warning: "#FFAA1D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAFAFA",
  backgroundDisabled: "#EBE8E8",
  contrast: "#261313",
  invertedContrast: "#FFFFFF",
  input: "#F5EBEB",
  tertiary: "#F5F0F0",
  text: '#000000',
  textDisabled: '#999999',
  textSubtle: '#858585',
  borderColor: "#EBE8E8",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFE6E6 0%, #FFF0F0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#BF3434",
  background: "#363131",
  backgroundDisabled: "#423737",
  contrast: "#FFFFFF",
  invertedContrast: "#261313",
  input: "#593E3E",
  // primaryDark: "#0098A1",
  tertiary: "#473636",
  text: "#FCE3E3",
  textDisabled: "#706060",
  textSubtle: "#D4C3C3",
  borderColor: "#634C4C",
  card: "#2B2525",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5C3131 0%, #542A2A 100%)",
  },
};
