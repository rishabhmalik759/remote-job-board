import { Global } from '@emotion/react';
import { Box, Button, CssBaseline, Skeleton, styled, SwipeableDrawer, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import * as React from 'react';
import MobileFilterItem from './MobileFilterItem';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const drawerBleeding = 56;

const MobileFilter: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();

  const swipableDrawerStyles = {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      height: `calc(50% - ${drawerBleeding}px)`,
      display: 'block',
    },
  };
  return (
    <>
      {' '}
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        //   container={container}
        sx={swipableDrawerStyles}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>Filter Options</Typography>
        </StyledBox>
        <div>
          <MobileFilterItem />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default MobileFilter;
