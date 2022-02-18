import { MenuItem, Checkbox, ListItemText, Box, FormControlLabel, FormControl, RadioGroup, Radio, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { IFilterOptions } from '../FilterOptions';

interface IMobileFilterItemList {
  item: IFilterOptions;
  filterOptions: IFilterOptions[];
  selectedFilter: number;
}

const MobileFilterItemList: React.FC<IMobileFilterItemList> = (props) => {
  const { item, item: {withOptions, menuItems}, filterOptions, selectedFilter } = props;
  const [filter, setFilter] = React.useState<string[]>([]);

  const handleFilterChange = (name: string) => {
    const removeFilter = filter.includes(name);
    if (removeFilter) {
      const newFilter = filter.filter((itemName) => itemName != name);
      setFilter(newFilter);
    } else {
      setFilter([...filter, name]);
    }
  };

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
      <TabPanel selectedFilter={selectedFilter} index={filterOptions.indexOf(item)}>
      <>
      {withOptions ? (
        menuItems.map((name) => (
          <MenuItem key={name} value={name} sx={{ px: 2, m: 0, maxHeight: 10 }}>
            <FormControlLabel
              control={
                <Checkbox onChange={() => handleFilterChange(name)} checked={filter.includes(name) ? true : false} />
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
            value={filter}
            onChange={handleFilterChange}
          >
            {menuItems.map((name) => (
              <FormControlLabel value="female" control={<Radio />} label="Female" />
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



// return (
//     <>
//       <TabPanel selectedFilter={selectedFilter} index={filterOptions.indexOf(item)}>
//         <MenuItemList
//           menuItems={item.menuItems}
//           withOptions={item.withOptions}
//           handleFilterChange={handleFilterChange}
//           filter={filter}
//         />
//         {item.menuItems.map((name) => (
//           <MenuItem key={name} value={name} sx={{ px: 2, m: 0, maxHeight: 10 }}>
//             {item.withOptions ? (
//               <FormControlLabel
//                 control={
//                   <Checkbox onChange={() => handleFilterChange(name)} checked={filter.includes(name) ? true : false} />
//                 }
//                 label={name}
//               />
//             ) : (
//               <ListItemText primary={name} />
//             )}
//           </MenuItem>
//         ))}
//       </TabPanel>
//     </>
//   );


// function MenuItemList(
//   menuItems: IFilterOptions['menuItems'],
//   withOptions: Boolean,
//   handleFilterChange: (name: string) => void,
//   filter: string[],
// ) {
//   return (
//     <>
//       {withOptions ? (
//         menuItems.map((name) => (
//           <MenuItem key={name} value={name} sx={{ px: 2, m: 0, maxHeight: 10 }}>
//             <FormControlLabel
//               control={
//                 <Checkbox onChange={() => handleFilterChange(name)} checked={filter.includes(name) ? true : false} />
//               }
//               label={name}
//             />
//           </MenuItem>
//         ))
//       ) : (
//         <FormControl component="fieldset">
//           <RadioGroup
//             aria-label="gender"
//             name="controlled-radio-buttons-group"
//             value={filter}
//             onChange={handleFilterChange}
//           >
//             {menuItems.map((name) => (
//               <FormControlLabel value="female" control={<Radio />} label="Female" />
//             ))}
//           </RadioGroup>
//         </FormControl>
//       )}
//     </>
//   );

  // return <> {menuItems.map((name) => (
  //     <MenuItem key={name} value={name} sx={{ px: 2, m: 0, maxHeight: 10 }}>
  //       {withOptions ? (
  //         <FormControlLabel
  //           control={
  //             <Checkbox onChange={() => handleFilterChange(name)} checked={filter.includes(name) ? true : false} />
  //           }
  //           label={name}
  //         />
  //       ) : (
  //         <ListItemText primary={name} />
  //       )}
  //     </MenuItem>
  //   ))}</>
// }