import * as React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/styles';
import FilterItem from './FilterItem';
import { handleRouteChange } from 'pages';
import { filterOptionsA, filterOptionsAtomsA } from '../FilterOptions';
import { useAtom } from 'jotai';

const DesktopFilter: React.FC = () => {
  const theme = useTheme();
  const [filterOptionsAtoms] = useAtom(filterOptionsAtomsA);
  const [filterOptions, setFilterOptions] = useAtom(filterOptionsA);
  const desktopFilterStyles = {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 2rem)',
      mx: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(80%)',
      mx: 'auto',
      display: 'block',
    },
  };

  const [clearAll, setClearAll] = React.useState<boolean>(false);

  return (
    <>
      {/* Desktop Filter */}
      <Box sx={desktopFilterStyles}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ mx: 2 }} variant="h6">
            ADD FILTERS
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={(e) => handleRouteChange(e, '/post-job')}
            sx={{ mx: 1 }}
            endIcon={<div style={{ fontSize: 16 }}>🚀</div>}
          >
            Post Job
          </Button>
        </Box>
        <Paper sx={{ m: 1, p: 1, shadow: 2, display: 'flex' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {filterOptionsAtoms.map((optionsAtom) => (
              <Box sx={{ m: 1 }}>
                <FilterItem item={optionsAtom} clearAll={clearAll} setClearAll={setClearAll} />
              </Box>
            ))}
            <Box sx={{ display: 'flex' }}>
              <Button onClick={() => setClearAll(true)} variant="contained" color="primary" sx={{ m: 'auto' }}>
                Clear all
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default DesktopFilter;
