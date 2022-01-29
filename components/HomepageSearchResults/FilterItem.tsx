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
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export interface IFilterOptions {
  inputLabel: string;
  id: string;
  menuItems: string[];
  withOptions: boolean;
}

const FilterItem: React.FC<IFilterOptions> = (props) => {
  const { inputLabel, id, menuItems, withOptions = false } = props;
  const labelId = `${id}-label`;

  const [filter, setFilter] = React.useState<string[]>([]);
  const handleMulitpleOptionsChange = (event: SelectChangeEvent<typeof filter>) => {
    const {
      target: { value },
    } = event;
    const clearFilter = value.includes('clear');
    if(typeof value === 'string' && value === "") setFilter([]);
    else if (withOptions && clearFilter) setFilter([]);
    else setFilter(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id={labelId}>{inputLabel}</InputLabel>
          <Select
            labelId={labelId}
            id={id}
            multiple={withOptions}
            value={filter}
            onChange={handleMulitpleOptionsChange}
            input={<OutlinedInput label={inputLabel} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            color="secondary"
          >
            
            {withOptions ? <MenuItem sx={{ fontWeight: 'medium' }} value="clear">
              <em>Clear Filter</em>
            </MenuItem> : <MenuItem sx={{ fontWeight: 'medium' }} value="">
              <em>Clear Filter</em>
            </MenuItem>}
            {menuItems.map((name) => (
              <MenuItem key={name} value={name}>
                {withOptions && <Checkbox checked={filter.includes(name)} />}
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