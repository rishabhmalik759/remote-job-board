import * as React from 'react';
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import HeaderBGLeft from 'images/headerBGLeft.svg';
import HeaderBGRight from 'images/headerBGRight.svg';

import { FixedSizeList, ListChildComponentProps } from 'react-window';

export const HomepageHeader: React.FC = () => {
  const theme = useTheme();
  const displaySearchResults = false;

  // Styles Start
  const HeaderFlexStyles = {
    py: 2,
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  };

  const HomepageHeaderBox = styled(Box)({
    position: 'absolute',
    left: 0,
    minWidth: '100%',
    mb: 5,
    background: `linear-gradient(90deg, rgba(254,202,240,1) 0%, rgba(185,231,236,1) 47%, rgba(161,191,235,1) 100%)`,
  });

  const HeaderSVGSBox = styled(Box)({
    display: 'none',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  });
  const SearchResultBoxStyles = {
    height: 400,
    width: 300,
    bgcolor: 'background.paper',
    position: 'absolute',
    mt: 1,
    boxShadow: 1,
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  };

  const SearchBox = styled(Paper)({
    p: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    my: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  });
  // Styles End

  return (
    <>
      <HomepageHeaderBox>
        <Box sx={HeaderFlexStyles}>
          <HeaderSVGSBox>
            <HeaderBGLeft width="80%" height="100%" viewBox="0 0 540 380" />
          </HeaderSVGSBox>
          {/* Search Bar */}
          <Box sx={{ mx: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Find a job or change your career to the most paid</Typography>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Remote Roles
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <SearchBox>
                <IconButton sx={{ p: '10px' }}>
                  <SearchIcon />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search remote jobs"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
              </SearchBox>
            </Box>

            {/* Search Results */}
            {displaySearchResults && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={SearchResultBoxStyles}>
                  <FixedSizeList
                    style={{ maxWidth: '400px !important', margin: 'auto' }}
                    height={400}
                    width={400}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                  >
                    {renderRow}
                  </FixedSizeList>
                </Box>
              </Box>
            )}
          </Box>
          <HeaderSVGSBox>
            <HeaderBGRight width="80%" height="100%" viewBox="0 0 540 380" />
          </HeaderSVGSBox>
        </Box>
      </HomepageHeaderBox>
      <Box sx={{ height: 500 }}></Box>
    </>
  );
};

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}
