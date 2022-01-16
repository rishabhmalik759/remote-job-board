
import * as React from 'react';

import { Layout } from 'components/Layout';
import {PostJobForm} from 'components/PostJobForm';
import Head from 'next/head';

const PostJob: React.FC = () => {

  return (
    <Layout>
      <div>
        <Head>
          <title>Post a job</title>
        </Head>
        <div>
          <PostJobForm />
        </div>
      </div>
    </Layout>
  );
};

export default PostJob;
