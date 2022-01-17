import { List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer, Theme, styled, Box, Icon } from '@mui/material';
import * as React from 'react';
import { createStyles, makeStyles, useTheme } from '@mui/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { ArrowLeft } from '@material-ui/icons';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import router from 'next/dist/client/router';
const drawerWidth = '250px';

const FireNav = styled(List)<{ component?: React.ElementType }>(({ theme }) =>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
    minHeight: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    }
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
}));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.background.paper,
      color: 'white',
    },
    content: {
      flexGrow: 1,
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: '80vw',
      marginTop: 30,
    },
  }),
);

interface ICustomDrawer {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomDrawer: React.FC<ICustomDrawer> = (props) => {
  const { openDrawer, setOpenDrawer } = props;
  const classes = useStyles();
  const theme = useTheme();
  const handleClick = (e:any, route: string) => {
    e.preventDefault()
    router.push(route)
  }
  return (
    <div>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Paper elevation={0} sx={{ maxWidth: drawerWidth }}>
          <FireNav component="nav" disablePadding>
            <ListItem sx={{ p: 0, backgroundColor: 'white' }}>
              <ListItemButton component="a" href="/" onClick={(e:any) => handleClick(e, '/')}>
                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                <ListItemText
                  sx={{ my: 0 }}
                  primary="AJB"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
              <Box
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  height: 56,
                  display: 'flex',
                  px:1.5,
                  [theme.breakpoints.up('sm')]: {
                    height: 64,
                  },
                }}
              >
                <IconButton
                  size="large"
                  sx={{
                    m:'auto',
                    backgroundColor: theme.palette.secondary.dark,
                    '&:hover': { backgroundColor: theme.palette.secondary.light },
                  }}
                  onClick={() => setOpenDrawer(false)}
                >
                  <KeyboardDoubleArrowLeftIcon htmlColor="white" fontSize="large" />
                </IconButton>
              </Box>
            </ListItem>

            <Box sx={{ p: 1 }}>
              <ListItem
                component="div"
                disablePadding
                color="secondary"
                sx={{ boxShadow: 1, backgroundColor: 'white', mt: 1, mb: 1, borderRadius: 5 }}
              >
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemText
                    primary="Home Page"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body2',
                    }}
                  />
                  <Tooltip  title="Post a job">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent:'center',
                      fontSize: 25,
                    }}
                  >
                    🏠
                  </Box>
                </Tooltip>
                </ListItemButton>
                
              </ListItem>
              <ListItem
                component="div"
                disablePadding
                color="secondary"
                sx={{ boxShadow: 1, backgroundColor: 'white', mt: 1, mb: 1, borderRadius: 5 }}
              >
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemText
                    primary="About Awesome Job Board"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body2',
                    }}
                  />
                  <Tooltip  title="Post a job">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent:'center',
                      fontSize: 25,
                    }}
                  >
                    🚐
                  </Box>
                </Tooltip>
                </ListItemButton>
                
              </ListItem>
              <ListItem
                component="div"
                disablePadding
                color="secondary"
                sx={{ boxShadow: 1, backgroundColor: 'white', mt: 1, mb: 1, borderRadius: 5 }}
                onClick={()=>router.push('/post-job')}
              >
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemText
                    primary="Post Job"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body2',
                    }}
                  />
                  <Tooltip  title="Post a job">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent:'center',
                      fontSize: 25,
                    }}
                  >
                    🚀
                  </Box>
                </Tooltip>
                </ListItemButton>
                
              </ListItem>
            </Box>
          </FireNav>
        </Paper>
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
