import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AppBar from './AppBar';
import SimpleEarn from './SimpleEarn';

const App = () => {
  return (
    <>
      <AppBar />
      {/* <Container maxWidth="sm"> */}
      <Container fixed>
        <Box sx={{ my: 4 }}>
          {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example
          </Typography> */}
          <SimpleEarn />
        </Box>
      </Container>
    </>
  );
};

export default App;
