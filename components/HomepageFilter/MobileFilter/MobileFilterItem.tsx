import * as React from 'react';
import { Box, Tabs, Tab, Typography, useTheme, Checkbox, ListItemText, MenuItem, Paper, List, ListItem } from '@mui/material';
import { filterOptions, IFilterOptions } from '../FilterOptions';
import MobileFilterItemList from './MobileFilterItemList';

const MobileFilterItem: React.FC<IFilterOptions> = (props) => {
  const { inputLabel, id, menuItems, withOptions = false } = props;

  const [selectedFilter, setSelectedFilter] = React.useState(0);
  const theme = useTheme();
  const [filter, setFilter] = React.useState<string[]>(['Oliver Hansen', 'Van Henry']);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
              <Tab key={item.inputLabel} sx={{ color: theme.palette.secondary.main }} label={item.inputLabel} />
            ))}
          </Tabs>
        </Paper>
        <Box sx={{height: 60, root:{p:0}}} />
          <List
            sx={{
              p: 0,
              zIndex: 1,
              width: '100%',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 160,
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
          >
            {filterOptions.map((item) => (
           <MobileFilterItemList item={item} selectedFilter={selectedFilter} filterOptions={filterOptions} />
          ))}
          </List>
          
        </Box>
    </>
  );
};

export default MobileFilterItem;



function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
