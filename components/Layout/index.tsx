import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  Box,
} from '@mui/material';
import * as React from 'react';
import { User } from './User';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import CustomDrawer from './CustomDrawer';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
interface LayoutProps {

}

const MainComponent = styled('main')({
  flexGrow: 1,
  justifyContent: 'center',
  margin: 'auto',
  maxWidth: '80vw',
  marginTop: 40,
});

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const ToolBarStyles = {
    [theme.breakpoints.up('md')]: {
      marginLeft: '120px',
      width: `calc(100% - 120px)`,
    },
  };

  const SupportBarStyles = {
    display: 'flex',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '120px',
    },
  }

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={ToolBarStyles}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpenDrawer(!openDrawer)}
            size="large"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Awesome Job Board 🚀
          </Typography>
          <User />
        </Toolbar>
        <Box sx={SupportBarStyles}>
          <IconButton size='large' sx={{mx: 1.4, my:0.5}}><ArrowBackTwoToneIcon /></IconButton>
        </Box>
      </AppBar>
      
      
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <CustomDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
      </nav>
      <MainComponent>
        {/* <div className={classes.toolbar} /> */}
        {props.children}
      </MainComponent>
    </div>
  );
};
