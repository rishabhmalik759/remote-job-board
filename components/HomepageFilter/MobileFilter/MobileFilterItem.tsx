import * as React from 'react';
import { Box, Tabs, Tab, Typography, useTheme, Checkbox, ListItemText, MenuItem, Paper, List, ListItem } from '@mui/material';
import { filterOptions, IFilterOptions } from '../FilterOptions';

const MobileFilterItem: React.FC<IFilterOptions> = (props) => {
  const { inputLabel, id, menuItems, withOptions = false } = props;

  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const [filter, setFilter] = React.useState<string[]>(['Oliver Hansen', 'Van Henry']);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      {' '}
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Paper elevation={0} sx={{ position: 'absolute', top: 0, zIndex: 2 }}>
          <Tabs
            value={value}
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
            <TabPanel value={value} index={filterOptions.indexOf(item)}>
              {item.menuItems.map((name) => (
                  <MenuItem key={name} value={name} sx={{p:0, m:0, maxHeight: 10}}>
                    {item.withOptions && (
                      <Checkbox
                        onChange={() =>
                          filter.indexOf(name)
                            ? setFilter(filter.filter((item) => item != name))
                            : setFilter(filter.concat(name))
                        }
                        checked={filter.includes(name) ? true : false}
                      />
                    )}
                    <ListItemText primary={name} />
                  </MenuItem>
              ))}
            </TabPanel>
          ))}
          </List>
          
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item Seven
          </TabPanel>
        </Box>
    </>
  );
};

export default MobileFilterItem;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
