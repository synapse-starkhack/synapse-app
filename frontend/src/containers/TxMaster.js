import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';

import Ad from './Ad';
import ExecuteTransaction from '../components/ExecuteTransaction';
import SignTransaction from '../components/SignTransaction';

const steps = [
  'Sign Transaction',
  'Watching Ad',
  'Finish the transation',
];

const SimpleEarn = () => {
    const [step, setStep] = useState(0);
    const [network, setNework] = useState('');
    const [token, setToken] = useState('');
    const [transaction, setTranscation] = useState();

    const onSubmitTransaction = ({ network, token, transaction }) => {
        setNework(network);
        setToken(token);
        setTranscation(transaction);
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
                {step === 0 && <SignTransaction onChange={data => onSubmitTransaction(data)} /> }
                {step === 1 && <Ad onSubmit={() => setStep(2)} />}
                {step === 2 && <ExecuteTransaction />}
            </Box>
        </Container>
    );
};

export default SimpleEarn;
