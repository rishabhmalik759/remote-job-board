import { ExitToApp } from '@material-ui/icons';
import { Button, Avatar, Typography, Popover, Paper, List, ListItem, Link } from '@mui/material';
import React from 'react';
import { useAuth } from 'use-auth0';

export function User() {
  const { isAuthenticated, login, logout, user } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  if(isAuthenticated() && user){
    return (
      <>
      <Button aria-describedby={id} onClick={handleOpen} color="secondary">
        <Avatar alt={user.name} src={user.picture} />
        <Typography variant="body2">{user.name}</Typography>
      </Button>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper>
          <List>
            <ListItem button onClick={logout}>
              <ExitToApp/>
              Logout
            </ListItem>
          </List>
        </Paper>
        </Popover>
      </>
    );
  } else {
    return(
      <Button color="secondary" onClick={login}>

      </Button>
      )
    }
}