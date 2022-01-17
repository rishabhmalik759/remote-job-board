import { createTheme } from '@mui/material/styles';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createTheme({
  drawerWidth: 240,
  palette: {
    background: {
      paper: '#F3F2EF',
      default: '#F3F2EF',
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      light: '#d84315',
      main: '#0277bd',
      dark: '#f59b23',
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
