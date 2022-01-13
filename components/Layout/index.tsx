import { Divider, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, Button, Theme } from '@mui/material';
import* as React from 'react';
import { User } from './User';
import MenuIcon from '@mui/icons-material/Menu';
import { createStyles, makeStyles, useTheme } from '@mui/styles';

interface LayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
}
const drawerWidth = "250px";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: '#fff',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.background,
      color: 'white',
      paddingLeft:'15px'
    },
    content: {
      flexGrow: 1,
    },
    menuItem: {
      color: '#fff',
    },
  }),
);
export const Layout: React.FC<LayoutProps> = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const[openDrawer, setOpenDrawer] = React.useState(false);

  const drawer = (
    <div>
    <Button onClick={()=>setOpenDrawer(true)}>Left</Button>
    <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
      variant="temporary"
      anchor='left'
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
    >
      something
      something
    </Drawer>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>setOpenDrawer(!openDrawer)}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Nitro 🚀
          </Typography>
          <User/>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {drawer}
      </nav>
      <main className={classes.content}>
        <div  className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}