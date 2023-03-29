const COLORS = {
  primary: "#312651", // BEFORE --> #312651 #284b63
  secondary: "#444262", // BEFORE --> #444262 /f new #22577a
  tertiary: "#5487ff", // BEFORE --> #FF7754

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8", // BEFORE --> #F3F4F8
  lightWhite: "#FAFAFC", // BEFORE --> #bdbdd7
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
