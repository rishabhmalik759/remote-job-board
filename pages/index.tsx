import * as React from 'react';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import { Box, Link, Typography } from '@mui/material';
import router from 'next/dist/client/router';
import {HomepageHeader} from 'components/HomepageHeader';

const Index: React.FC = () => {
  const handleRouteChange = (e: React.MouseEvent<HTMLElement>, route: string) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Nitro</title>
        </Head>
        <div>
          <HomepageHeader />

          <Link href="/post-job" sx={{ color: 'black' }} onClick={(e) => handleRouteChange(e, '/post-job')}>
            {' '}
            <a>Post Job</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
