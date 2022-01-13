import * as React from "react";
import Head from "next/head";
import { Layout } from "components/Layout";
import { Link } from "@mui/material";

const Index: React.FC = () => {
  return (
    <Layout>
      <div>
        <div>
        </div>
        <Head>
          <title>Nitro</title>
        </Head>
        <Link href="/post-job"> <a>Post Job</a></Link>

      </div>
    </Layout>
    
  );
};

export default Index;
