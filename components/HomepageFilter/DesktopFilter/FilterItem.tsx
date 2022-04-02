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
import { filterOptionsA, IFilterOptions } from '../FilterOptionsState';
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

interface IFilterItem {
  item: PrimitiveAtom<IFilterOptions>;
  clearAll: boolean;
  setClearAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterItem: React.FC<IFilterItem> = (props) => {
  const { item, clearAll, setClearAll } = props;
  const [filterItem, setFilterItem] = useAtom(item);
  const [filterOptions] = useAtom(filterOptionsA);
  const theme = useTheme();
  const { inputLabel, id, menuItems, withOptions = false, appliedFilters = [], appliedFiltersCount = 4 } = filterItem;
  const labelId = `${id}-label`;

  React.useEffect(() => {
    handleClearAll();
    const optionsIndex = filterOptions.find((options)=> options.id == filterItem.id);
    if(optionsIndex === filterOptions[filterOptions.length - 1]) setClearAll(false);
  }, [clearAll]);

  const handleClearAll = () => {
    if (clearAll) {
      setFilterItem({ ...filterItem, appliedFilters: [], appliedFiltersCount: 0 });
    }
  };

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
            renderValue={(selected) => `[${appliedFiltersCount}] ${selected.join(', ')}`}
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
