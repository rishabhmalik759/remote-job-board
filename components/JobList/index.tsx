import { Box, Grid, Paper, styled, useTheme } from '@mui/material';
import * as React from 'react';
import JobListItems from './JobListItems';

const JobList: React.FC<{jid: string | string[] | undefined}> = ({jid}) => {
  const theme = useTheme();

  const jobResultsStyles = {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 2rem)',
      mx: 'auto',
      display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(80%)',
      mx: 'auto',
      px: 2,
      display: 'block',
    },
  };

  return (
    <>
      <Box sx={jobResultsStyles}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <JobListItems />
          </Grid>
          <Grid item xs={6} md={6}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobList;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
