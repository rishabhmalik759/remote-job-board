import * as React from 'react';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import { Box, Link, Typography } from '@mui/material';
import router from 'next/dist/client/router';
import { HomepageHeader } from 'components/HomepageHeader';
import HomepageSearchResults from 'components/HomepageSearchResults';
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
          <HomepageSearchResults />

          
        </div>
      </div>
    </Layout>
  );
};

export default Index;
