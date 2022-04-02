import * as React from 'react';
import { Box, Button, Paper,styled } from '@mui/material';
import { useTheme } from '@mui/styles';
import FilterItem from './FilterItem';
import { filterOptionsAtomsA } from '../FilterOptionsState';
import { useAtom } from 'jotai';

const DesktopFilter: React.FC = () => {
  const theme = useTheme();
  const [filterOptionsAtoms] = useAtom(filterOptionsAtomsA);
  const [clearAll, setClearAll] = React.useState<boolean>(false);

  const desktopFilterStyles = {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 2rem)',
      mx: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      mx: 'auto',
      display: 'block',
    },
  };

  const HomepageHeaderBox = styled(Paper)({
    background: `linear-gradient(90deg, rgba(254,202,240,1) 0%, rgba(185,231,236,1) 47%, rgba(161,191,235,1) 100%)`,
  });

  return (
    <>
      {/* Desktop Filter */}
      <Box sx={desktopFilterStyles}>
        <HomepageHeaderBox elevation={1} sx={{ p: 1, shadow: 2, borderRadius: '0 0 5px 5px' }}>
          <Paper sx={{ display: 'flex', justifyContent: 'center', my: 1, backgroundColor: 'rgba(255,255,255, 0.5)' }}>
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
        </HomepageHeaderBox>
      </Box>
    </>
  );
};

export default DesktopFilter;
