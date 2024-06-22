import { useState }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

const Payment = () => {
  const [result, setResult] = useState();
  const [addr, setAddr] = useState();

  const handleOnSubmit = () => {
    fetchData({ addr, ticket: 'stak', amount: '0.00001' });
  };

  const fetchData = async (data) => {
    try {
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
      setResult(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="" onChange={e => setAddr(e.target?.value)} />
      <Button variant="contained" size="large" onClick={() => handleOnSubmit()} >Submit</Button>
      {result && (
        <p>{result.tx}</p>
      )}
    </Box>
  );
};

export default Payment;
