import { useState }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const Payment = () => {
  const [status, setStatus] = useState('')
  const [result, setResult] = useState();
  const [addr, setAddr] = useState();

  const handleOnSubmit = () => {
    fetchData({ addr, ticket: 'stak', amount: '0.001' });
  };

  const fetchData = async (data) => {
    try {
      setStatus('loading');
      const res = await fetch('http://localhost:3001/starknet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setStatus('finish');
      setResult(result);
    } catch (error) {
      setStatus('error');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box margin={2}>
      <Typography variant='subtitle1'>You just earned 100 points by watching the video. Now you can withdraw 0.001 $STAK</Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '65ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <Input fullWidth defaultValue="" onChange={e => setAddr(e.target?.value)} />
        </Box>
        <Button width="100%" variant="contained" size="large" onClick={() => handleOnSubmit()} disabled={status}>Send</Button>
        {/* <Backdrop open /> */}
        {status === 'loading' && (
          <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress alignItems="center" />
            <Typography variant='h5'>Sending Transaction......</Typography>
          </Stack>
        )}
        {result && result.tx && (
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant='h5'>Your transaction finished successfully!</Typography>
            <Link href={`https://sepolia.voyager.online/tx/${result.tx}`} target="_blank" rel="noreferrer">Check On Voyager</Link>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Payment;
