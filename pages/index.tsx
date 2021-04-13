import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Home from 'components/Home';

const HomePage = () => {
  return (
    <Layout>
      <NextSeo
        title="Aymeric Toulouse Portfolio"
        description="Aymeric Toulouse Fullstack Javascript Developer"
      />
      <Fade in>
        <Home />
      </Fade>
    </Layout>
  );
};

export default HomePage;
