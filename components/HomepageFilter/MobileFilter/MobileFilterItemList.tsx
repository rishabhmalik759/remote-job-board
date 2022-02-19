import { MenuItem, Checkbox, Box, FormControlLabel, FormControl, RadioGroup, Radio, Button } from '@mui/material';
import { PrimitiveAtom, useAtom } from 'jotai';
import * as React from 'react';
import { filterOptionsA, IFilterOptions } from '../FilterOptions';

interface IMobileFilterItemList {
  item: PrimitiveAtom<IFilterOptions>;
  selectedFilter: number;
}

const MobileFilterItemList: React.FC<IMobileFilterItemList> = (props) => {
  const { item, selectedFilter } = props;
  const [filterItem, setFilterItem] = useAtom(item);
  const { menuItems, withOptions = false, appliedFilters = [] } = filterItem;
  const [filterOptions] = useAtom(filterOptionsA);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.FormEventHandler<HTMLDivElement>,
    name: string,
  ) => {
    const removeFilter = appliedFilters.includes(name);
    console.log('fired');
    var newFilter;
    if (name === 'clear') return setFilterItem({ ...filterItem, appliedFilters: [], appliedFiltersCount: 0 });
    if (withOptions) {
      if (removeFilter) {
        newFilter = appliedFilters.filter((itemName) => itemName != name);
        setFilterItem({ ...filterItem, appliedFilters: newFilter, appliedFiltersCount: newFilter.length });
      } else {
        newFilter = [...appliedFilters, name];
        setFilterItem({
          ...filterItem,
          appliedFilters: [...appliedFilters, name],
          appliedFiltersCount: newFilter.length,
        });
      }
    } else {
      newFilter = [name];
      setFilterItem({ ...filterItem, appliedFilters: [name], appliedFiltersCount: newFilter.length });
      console.log(appliedFilters, appliedFilters.includes(name));
    }
  };

  return (
    <>
      <TabPanel selectedFilter={selectedFilter} index={filterOptions.indexOf(filterItem)}>
        <>
          <Button
            variant="contained"
            sx={{width: '100%'}}
            onClick={() => setFilterItem({ ...filterItem, appliedFilters: [], appliedFiltersCount: 0 })}
          >
            CLEAR FILTER
          </Button>
          {withOptions ? (
            menuItems.map((name) => (
              <MenuItem key={name} value={name} sx={{ px: 2, m: 0, maxHeight: 48 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleFilterChange(e, name)}
                      checked={appliedFilters.includes(name) ? true : false}
                    />
                  }
                  label={name}
                />
              </MenuItem>
            ))
          ) : (
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={appliedFilters}
                onChange={handleFilterChange}
              >
                {menuItems.map((name) => (
                  <FormControlLabel
                    sx={{ px: 2 }}
                    key={name}
                    value={name}
                    checked={appliedFilters.includes(name) ? true : false}
                    control={<Radio />}
                    label={name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        </>
      </TabPanel>
    </>
  );
};

export default MobileFilterItemList;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  selectedFilter: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, selectedFilter, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={selectedFilter !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {selectedFilter === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}
