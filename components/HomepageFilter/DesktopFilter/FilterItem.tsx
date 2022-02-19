import * as React from 'react';
import {
  MenuItem,
  ListItemText,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Checkbox,
  useTheme,
} from '@mui/material';
import { IFilterOptions } from '../FilterOptions';
import { PrimitiveAtom, useAtom } from 'jotai';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const FilterItem: React.FC<PrimitiveAtom<IFilterOptions>> = (props) => {
  const [filterItem, setFilterItem] = useAtom(props);
  const theme = useTheme();
  const { inputLabel, id, menuItems, withOptions = false, appliedFilters = [], appliedFiltersCount = 4 } = filterItem;
  const labelId = `${id}-label`;

  const handleSetAppliedFilters = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    var appliedFilters;

    if (typeof value !== 'string' && value.find((val) => val === 'clear')) appliedFilters = [];
    else if (typeof value !== 'string') appliedFilters = value;
    else if (typeof value === 'string' && value === 'clear') appliedFilters = [];
    else if (typeof value === 'string') appliedFilters = [value];

    setFilterItem({
      ...filterItem,
      appliedFilters: appliedFilters,
      appliedFiltersCount: appliedFilters ? appliedFilters.length : 0,
    });
  };

  const filterItemStyles = {
    m: 1,
    width: 170,
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  };
  
  return (
    <>
      <div>
        <FormControl sx={filterItemStyles}>
          <InputLabel id={labelId}>{inputLabel}</InputLabel>
          <Select
            labelId={labelId}
            id={id}
            multiple={withOptions}
            value={appliedFilters}
            onChange={handleSetAppliedFilters}
            input={<OutlinedInput label={`${appliedFiltersCount} ${inputLabel}`} />}
            renderValue={(selected) =>`[${appliedFiltersCount}] ${selected.join(', ')}`}
            MenuProps={MenuProps}
            color="secondary"
          >
            {withOptions ? (
              <MenuItem sx={{ fontWeight: 'medium' }} value="clear">
                <em>Clear Filter</em>
              </MenuItem>
            ) : (
              <MenuItem sx={{ fontWeight: 'medium' }} value="clear">
                <em>Clear Filter</em>
              </MenuItem>
            )}
            {menuItems.map((name) => (
              <MenuItem key={name} value={name}>
                {withOptions && <Checkbox checked={appliedFilters.includes(name)} />}
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default FilterItem;