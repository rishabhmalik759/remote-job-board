import { Paper } from '@mui/material';
import * as React from 'react';

const JobSelected: React.FC = () => {
  return (
    <>
      <Paper
        sx={{
          mt: 1,
          mb: 1,
          height: '80vh',
          p: 2,
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        something
      </Paper>
    </>
  );
};

export default JobSelected;
{
  /* <Box sx={{}}>
  {' '}
  <Paper
    elevation={0}
    sx={{
      top: 150,
      bottom: -100,
      width: '30%',
      left: '50%',
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1',
      backgroundColor: '#fff',
      position: 'fixed',
      border: '1px solid #d4d2d0',
      bordeRadius: 8,
      marginTop: '1rem',
    }}
  >
    something
  </Paper>
</Box>; */
}
