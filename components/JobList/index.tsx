import { Box, Grid, Paper, styled, useTheme } from '@mui/material';
import * as React from 'react';
import JobListItems from './JobListItems';
import JobSelected from './JobSelected';

const JobList: React.FC<{ jid: string | string[] | undefined }> = ({ jid }) => {
  const theme = useTheme();

  const jobResultsStyles = {
    width: '100%',
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
      height: 'calc(100vh - 13%)',
    },
  };

  const jobListStyles = {
    marginTop: 1,
    paddingTop: 1
  };

  const JobSelectedBox = styled(Box)<{ component?: React.ElementType }>(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    position: 'sticky',
    top: 150,
  }));

  return (
    <>
      <Box sx={jobResultsStyles}>
        <Grid sx={jobListStyles} container spacing={2}>
          <Grid item xs={12} md={6}>
            <JobListItems />
          </Grid>
          <Grid item xs={12} md={6}>
            <JobSelectedBox>
              <JobSelected />
            </JobSelectedBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default JobList;
