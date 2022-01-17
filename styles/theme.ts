import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { green, orange, yellow } from '@mui/material/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createTheme({
  drawerWidth: 240,
  components: {
    MuiIconButton: {
      styleOverri4des: {
        root: { backgroundColor: '#d84315', '&:hover': { backgroundColor: '#f59b23 !important' } },
      },
    },
  },
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
      main: '#f59b23',
      dark: '#0277bd',
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
