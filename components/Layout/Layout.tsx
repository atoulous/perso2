import {
    Box
} from '@chakra-ui/react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Box paddingTop={'60px'}>
        {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
