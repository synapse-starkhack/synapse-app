import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AppBar from './AppBar';
import About from './About';
import Dashboard from '../components/Dashboard';
import SimpleEarn from './SimpleEarn';
import TxMaster from './TxMaster';

const App = () => {
  const [route, setRoute] = useState('Simple Earn');

  return (
    <>
      <AppBar onChange={page => setRoute(page)} />
      {/* <Container maxWidth="sm"> */}
      <Container fixed>
        <Box sx={{ my: 4 }}>
          {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example
          </Typography> */}
          {(route === 'Simple Earn') && <SimpleEarn />}
          {(route === 'Tx Master') && <TxMaster />}
          {(route === 'Dashboard') && <Dashboard />}
          {(route === 'About') && <About />}
        </Box>
      </Container>
    </>
  );
};

export default App;
