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
  const [clearAll, setClearAll] = React.useState<boolean>(false);

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
      <SwipeableDrawer
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
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Typography sx={{ p: 2, color: 'text.secondary' }}>Filter Options </Typography>
            <Box sx={{ p: 2 }}>
              <Button sx={{p:0}}  variant="text" color="secondary" onClick={()=>setClearAll(true)}>
                CLEAR ALL
              </Button>
            </Box>
          </Box>
        </StyledBox>
        <div>
          <MobileFilterItem clearAll={clearAll} setClearAll={setClearAll} />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default MobileFilter;
