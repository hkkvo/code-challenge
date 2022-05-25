import { createTheme } from "@mui/material/styles";
import { common, amber, deepOrange, grey, red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          // primary: common["white"],
          // divider: common.white,
          primary: {
            main: `hsl(0, 0%, 98%)`,
          },
          background: {
            default: `hsl(0, 0%, 98%)`,
            paper: `hsl(0, 0%, 100%)`,
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: `hsl(207, 26%, 17%)`,
            paper: `hsl(209, 23%, 22%)`,
          },
          text: {
            primary: `hsl(0, 0%, 100%)`,
          },
        }),
  },
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: `hsl(0, 0%, 98%)`,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
