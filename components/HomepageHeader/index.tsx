import * as React from 'react';
import { Box } from '@mui/material';
import SearchBox from '../SearchBox';

const HomepageHeader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
      <SearchBox helperText="Which Job? " />
    </Box>
  );
};
export default HomepageHeader;