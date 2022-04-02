import { CssBaseline, AppBar, Toolbar, IconButton, Typography, styled, Box, Button } from '@mui/material';
import * as React from 'react';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import CustomDrawer from './CustomDrawer';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import router from 'next/dist/client/router';
import { AnimateSharedLayout, motion } from 'framer-motion';
import SearchBox from 'components/SearchBox';
import { hideOnScrollWindow } from 'components/HomepageFilter/FilterOptionsState';
import { useAtom } from 'jotai';
import ArrowJobsLogo from 'images/logo.svg';

interface LayoutProps {}

const MainComponent = styled('main')({
  flexGrow: 1,
  justifyContent: 'center',
  margin: 'auto',
});

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [hideOnScroll] = useAtom(hideOnScrollWindow);

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
    justifyContent: 'left',
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
          <Box sx={{opacity: 0.8}}>
            {/* <ArrowJobsLogo width="70%" height="100%" viewBox="0 -100 1800 1000" /> */}
          </Box>
          {/* <Typography sx={{ fontSize: 17, fontWeight: 'medium', letterSpacing: '0.05rem' }} noWrap>
            ArrowJobs
          </Typography> */}
          <Box sx={{ flexGrow: 0, position: 'absolute', right: 10 }}>
            <Button
              title="Open settings"
              color="secondary"
              variant="contained"
              endIcon={<div style={{ fontSize: 16 }}>🚀</div>}
            >
              Post Job
            </Button>
          </Box>
        </Toolbar>
        <Toolbar sx={SupportBarStyles}>
          <IconButton color="secondary" edge="start" onClick={() => router.back()} size="large">
            <ArrowBackTwoToneIcon />
          </IconButton>
          {hideOnScroll && <Box
            sx={{
              justifyContent: 'center',
              ml: '20%',
              my: 2,
              transition: '1s',
              display: 'flex',
            }}
          >
            <Typography color='secondary' variant="h5" sx={{lineHeight: 2.3, px: 3, fontWeight: 'medium'}}>Search for the </Typography>
            <SearchBox />
            <Typography color='secondary' variant="h5" sx={{lineHeight: 2.3, px: 3, fontWeight: 'medium'}} >remote / local & hybrid jobs</Typography>
          </Box>}
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
