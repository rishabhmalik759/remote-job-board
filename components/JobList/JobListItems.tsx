import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import theme from 'styles/theme';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LiveFromSpace from 'images/live-from-space.jpg';
import Image from 'next/image';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCut from '@mui/icons-material/ContentCut';

const JobListItems = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const listItem = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {listItem.map(() => (
        <Box sx={{mb:1}}>
          <Paper elevation={0}>
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
                    Frontend/React vývojář
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    INVIA
                  </Typography>
                  <Typography variant="subtitle1" color={theme.palette.secondary.main} component="div">
                    Brno
                  </Typography>
                  <Typography variant="subtitle2" color={theme.palette.secondary.main} component="div">
                    Než přejdete na webové stránky společnosti, vytvořte si účet Indeed.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" component="div" sx={{ m: 1 }}>
                    Hledáš kreativní a technologicky atraktivní práci? Buď součástí týmu programátorů největší cestovní
                    agentury ve střední a západní Evropě, Invia Group. Budeš se podílet na vývoji unikátních aplikací a
                    tvořit web, který mixuje data z mnoha zdrojů a nabízí klientům největší nabídku zájezdů od většiny
                    cestovních kanceláří z 5 evropských zemí. Staráme se také o interní CRM, ERP systém i BI reporting.{' '}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ margin: 'auto', maxWidth: 130 }}>
                <Image src={LiveFromSpace} alt="Company Name" />
              </Box>
            </Card>
          </Paper>
        </Box>
      ))}
    </>
  );
};

export default JobListItems;
