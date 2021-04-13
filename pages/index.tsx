import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Home from 'components/Home';

const HomePage = () => {
  return (
    <Layout>
      <NextSeo
        title="Home | Tree"
        description="A short description goes here."
      />
      <Fade in>
        <Home />
      </Fade>
    </Layout>
  );
};

export default HomePage;
