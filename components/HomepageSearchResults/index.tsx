import {
  Box,
  Button,
  Stack,
  Typography,
  ListItem,
  List,
  Chip,
  Divider,
  Paper,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Popper,
} from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArchiveIcon from '@mui/icons-material/Archive';
import FilterItem from './FilterItem';
import { filterOptions } from './FilterOptions';
import { handleRouteChange } from 'pages';

const HomepageSearchResults: React.FC = () => {
  const theme = useTheme();
  console.log('these are filter options', filterOptions);
  return (
    <>
      <Box sx={{ width: '80%', m: 'auto' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ mx: 2 }} variant="h6">
            ADD FILTERS
          </Typography>
          <Button color="secondary" variant="contained" onClick={(e) => handleRouteChange(e, '/post-job')} sx={{mx: 1}} endIcon={<div style={{ fontSize: 16 }}>🚀</div>}>
            Post Job
          </Button>
        </Box>
        <Paper sx={{ m: 1, p: 1, shadow: 2, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {filterOptions.map((options) => (
              <Box sx={{ m: 1 }}>
                <FilterItem {...options} />
              </Box>
            ))}
            <Box sx={{ display: 'flex' }}>
              <Button variant="contained" color="primary" sx={{ m: 'auto' }}>
                Clear all
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default HomepageSearchResults;

{
  /* 
  
  const SearchResultsListBoxStyles = {
    my: 5,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '100%',
    m: 'auto',
  };
  const SearchResultsListItemBoxStyles = { alignItems: 'flex-start', m: 1, p: 1 };
  
  <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'medium', opacity: 0.8 }}>
            Job Search Results
          </Typography>
        </Box> */
}
{
  /* <Box sx={SearchResultsListBoxStyles}>
          <Box sx={SearchResultsListItemBoxStyles}>
            <Button variant="outlined" color="secondary" startIcon={<AddIcon />}>
              Add Filters
            </Button>
          </Box>
          <Box sx={SearchResultsListItemBoxStyles}>
            <Button sx={{mx:1}} variant="contained" color="secondary">
              Vote for features
            </Button>
            <Button sx={{mx:1}}  variant="contained" color="secondary">
              Write a review
            </Button>
            <Button sx={{mx:1}}  variant="contained" color="error">
              Report a bug
            </Button>
          </Box>
        </Box>
        <Box sx={{m:2}}>
          <Typography>Selected Filters</Typography>
          <Box sx={SearchResultsListBoxStyles}>
            <Stack direction="row">
              <Box sx={{ m: 1 }}>
                <Chip clickable={true} color="secondary" label="some" onDelete={() => console.log('some')} />
              </Box>
              <Box sx={{ m: 1 }}>
                <Chip clickable={true} color="secondary" label="some" onDelete={() => console.log('some')} />
              </Box>
              <Box sx={{ m: 1 }}>
                <Chip clickable={true} color="secondary" label="some" onDelete={() => console.log('some')} />
              </Box>
              <Box sx={{ m: 1 }}>
                <Chip clickable={true} color="secondary" label="some" onDelete={() => console.log('some')} />
              </Box>
              <Box sx={{ m: 1 }}>
                <Chip clickable={true} color="secondary" label="some" onDelete={() => console.log('some')} />
              </Box>
            </Stack>
          </Box>
        </Box> */
}
