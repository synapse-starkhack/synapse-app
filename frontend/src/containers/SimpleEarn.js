import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';

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
        <Container>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{ width: '100%' }}>
                {step === 0 && <TokenSelect onChange={data => onSelectToken(data)} /> }
                {step === 1 && <Ad onSubmit={() => setStep(2)} />}
                {step === 2 && <Payment />}
            </Box>
        </Container>
    );
};

export default SimpleEarn;
