import * as React from 'react';
import {
  Box,
  Tabs,
  Tab,
  useTheme,
  Paper,
  List,
} from '@mui/material';
import MobileFilterItemList from './MobileFilterItemList';
import { filterOptionsA, filterOptionsAtomsA } from '../FilterOptions';
import { useAtom } from 'jotai';

const MobileFilterItem: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState(0);
  const theme = useTheme();
  const [filterOptionsAtoms] = useAtom(filterOptionsAtomsA);
  const [filterOptions] = useAtom(filterOptionsA);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: any) => {
    setSelectedFilter(newValue);
  };

  return (
    <>
      {' '}
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Paper elevation={0} sx={{ position: 'absolute', top: 0, zIndex: 2 }}>
          <Tabs
            value={selectedFilter}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {filterOptions.map((item) => (
              <Tab key={item.inputLabel} sx={{ color: theme.palette.secondary.main }} label={`[${item.appliedFiltersCount}] ${item.inputLabel}`} />
            ))}
          </Tabs>
        </Paper>
        <Box sx={{ height: 60, root: { p: 0 } }} />
        <List
          sx={{
            p: 0,
            zIndex: 1,
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 220,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {filterOptionsAtoms.map((options) => (
            <MobileFilterItemList item={options} selectedFilter={selectedFilter} />
          ))}
        </List>
      </Box>
    </>
  );
};

export default MobileFilterItem;