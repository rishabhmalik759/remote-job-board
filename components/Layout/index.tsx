import { CssBaseline, AppBar, Toolbar, IconButton, Typography, styled, Box, Button } from '@mui/material';
import * as React from 'react';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import CustomDrawer from './CustomDrawer';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import router from 'next/dist/client/router';
import { AnimateSharedLayout, motion } from 'framer-motion';

interface LayoutProps {}

const MainComponent = styled('main')({
  flexGrow: 1,
  justifyContent: 'center',
  margin: 'auto',
});

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const ToolBarStyles = {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      marginLeft: '120px',
      width: `calc(100% - 120px)`,
    },
  };

  const SupportBarStyles = {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '144px',
    },
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={ToolBarStyles}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpenDrawer(!openDrawer)}
            size="large"
            sx={{ color: 'white' }}
          >
            <Menu />
          </IconButton>
          <Typography sx={{ fontSize: 17, fontWeight: 'medium', letterSpacing: '0.05rem' }} noWrap>
            REMOTEWRLD
          </Typography>
          <Box sx={{ flexGrow: 0, position: 'absolute', right: 10 }}>
            <Button title="Open settings" color="secondary" variant="contained" endIcon={<div style={{fontSize: 16}}>🚀</div>}>
              Post Job
            </Button>
          </Box>
        </Toolbar>
        <Toolbar sx={SupportBarStyles}>
          <IconButton color="secondary" edge="start" onClick={() => router.back()} size="large">
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* AppBar Space */}
      <Box
        sx={{
          height: 112,
          [theme.breakpoints.up('md')]: {
            height: 128,
          },
        }}
      />
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <CustomDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </nav>
      <MainComponent>
        {/* <div className={classes.toolbar} /> */}
        <AnimateSharedLayout>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
          >
            {props.children}
          </motion.div>
        </AnimateSharedLayout>
      </MainComponent>
    </div>
  );
};
