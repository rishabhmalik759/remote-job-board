import { Box, Card, CardContent, CardHeader, IconButton, ListItemIcon, Menu, MenuItem, Paper, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import LiveFromSpace from 'images/live-from-space.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';
const JobSelected: React.FC = () => {

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        sx={{
          mb: 1,
          height: '80vh',
          p: 2,
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
         <CardHeader
              action={
                <IconButton aria-label="settings" id="options" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Menu
              id="options"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                {' '}
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                Save the Job Offer
              </MenuItem>
              <MenuItem onClick={handleClose}>I am not interested</MenuItem>
              <MenuItem onClick={handleClose}>Report offer</MenuItem>
            </Menu>
        <Card sx={{ display: 'flex', mt: '-60px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70%', minWidth: '70%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Frontend/React v??voj????
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    INVIA
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    Brno
                  </Typography>
                  <Typography variant="subtitle2" color={theme.palette.secondary.main} component="div">
                    Ne?? p??ejdete na webov?? str??nky spole??nosti, vytvo??te si ????et Indeed.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" component="div" sx={{ m: 1 }}>
                    Hled???? kreativn?? a technologicky atraktivn?? pr??ci? Bu?? sou????st?? t??mu program??tor?? nejv??t???? cestovn??
                    agentury ve st??edn?? a z??padn?? Evrop??, Invia Group. Bude?? se pod??let na v??voji unik??tn??ch aplikac?? a
                    tvo??it web, kter?? mixuje data z mnoha zdroj?? a nab??z?? klient??m nejv??t???? nab??dku z??jezd?? od v??t??iny
                    cestovn??ch kancel?????? z 5 evropsk??ch zem??. Star??me se tak?? o intern?? CRM, ERP syst??m i BI reporting.{' '}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ margin: 'auto', maxWidth: 130 }}>
                <Image src={LiveFromSpace} alt="Company Name" />
              </Box>
            </Card>
      </Paper>
    </>
  );
};

export default JobSelected;
{
  /* <Box sx={{}}>
  {' '}
  <Paper
    elevation={0}
    sx={{
      top: 150,
      bottom: -100,
      width: '30%',
      left: '50%',
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1',
      backgroundColor: '#fff',
      position: 'fixed',
      border: '1px solid #d4d2d0',
      bordeRadius: 8,
      marginTop: '1rem',
    }}
  >
    something
  </Paper>
</Box>; */
}
