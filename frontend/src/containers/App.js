import { useState } from 'react';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { StarknetWalletConnectors } from '@dynamic-labs/starknet';

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
      <DynamicContextProvider
        settings={{
        environmentId: 'dd8176a8-0d87-4398-94f9-b8479941e67a',
        walletConnectors: [EthereumWalletConnectors, StarknetWalletConnectors],
      }}>
        <AppBar onChange={page => setRoute(page)} />
        <Container fixed>
          <Box sx={{ my: 4 }}>
            {(route === 'Simple Earn') && <SimpleEarn />}
            {(route === 'Tx Master') && <TxMaster />}
            {(route === 'Dashboard') && <Dashboard />}
            {(route === 'About') && <About />}
          </Box>
        </Container>
      </DynamicContextProvider>
    </>
  );
};

export default App;
