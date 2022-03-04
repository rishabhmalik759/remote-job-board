import * as React from 'react';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import router from 'next/dist/client/router';
import { HomepageHeader } from 'components/HomepageHeader';
import HomepageFilter from 'components/HomepageFilter';
import { Box, Typography } from '@mui/material';
import JobList from 'components/JobList';
import { useRouter } from 'next/router'

export const handleRouteChange = (e: React.MouseEvent<HTMLElement>, route: string) => {
  e.preventDefault();
  router.push(route);
};

const Index: React.FC = () => {
  const router = useRouter();
  const { jid } = router.query

  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Remote Wrld</title>
        </Head>
        <div>
          <Typography variant="h2" >{jid}</Typography>
          <HomepageHeader />
          <HomepageFilter />
          <JobList jid={jid}/>
          <Box sx={{height: 500}}></Box>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
