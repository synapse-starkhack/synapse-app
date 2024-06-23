import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

import Ad from './Ad';
import Payment from './Payment';
import TokenSelect from '../components/TokenSelect';

const steps = [
  'Select netowrk and token',
  'Watching Ad',
  'Finish the transation',
];

const SimpleEarn = () => {
    const [step, setStep] = useState(0);
    const [network, setNework] = useState('');
    const [token, setToken] = useState('');

    const onSelectToken = ({ network, token }) => {
        setNework(network);
        setToken(token);
        setStep(1);
    };
    
    return (
        <Box>
            {/* <Box sx={{ width: '100%', alignItems: 'center' }}>
                <Typography variant="h3" gutterBottom>
                Simple Earn
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Easily get gas fee by watching Ad.
                </Typography>
            </Box> */}
            <Box sx={{ width: '100%' }} margin={3}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{ width: '100%', alignItems: 'center' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing="2"
                >
                    <Grid item sx="8" sm="6">
                        {step === 0 && <TokenSelect onChange={data => onSelectToken(data)} /> }
                        {step === 1 && <Ad onSubmit={() => setStep(2)} />}
                        {step === 2 && <Payment />}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SimpleEarn;
