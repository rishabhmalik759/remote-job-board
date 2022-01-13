import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { green, orange, yellow } from '@mui/material/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createTheme({
  drawerWidth: 240,
  palette: {
    background:{
      paper: "#fff",
      default: "#F3F2EF"
    },
    primary: {
      main: "#18213c",
      text: "#000",
    },
    secondary: {
      light: yellow[700],
      main: yellow[900],
      dark: orange[900],
    },
    typography: {
      useNextVariants: true,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1007,
      lg: 1296,
      xl: 1920,
    },
  },
} as any);
export type Theme = typeof theme;
export default theme;


