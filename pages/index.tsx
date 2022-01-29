import * as React from 'react';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import router from 'next/dist/client/router';
import { HomepageHeader } from 'components/HomepageHeader';
import HomepageFilter from 'components/HomepageFilter';
import { Box } from '@mui/material';

export const handleRouteChange = (e: React.MouseEvent<HTMLElement>, route: string) => {
  e.preventDefault();
  router.push(route);
};

const Index: React.FC = () => {
  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Nitro</title>
        </Head>
        <div>
          <HomepageHeader />
          <HomepageFilter />
          <Box sx={{height: 500}}></Box>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
