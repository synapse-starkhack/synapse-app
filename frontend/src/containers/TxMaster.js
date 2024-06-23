import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import Ad from './Ad';
// import ExecuteTransaction from '../components/ExecuteTransaction';
// import SignTransaction from '../components/SignTransaction';

const steps = [
  'Sign Transaction',
  'Watching Ad',
  'Finish the transation',
];

const TxMaster = () => {
    const [step, setStep] = useState(0);
    
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
                <Typography variant='h5' margin={4}>Coming Soon......</Typography>
                {/* {step === 0 && <SignTransaction onChange={data => onSubmitTransaction(data)} /> }
                {step === 1 && <Ad onSubmit={() => setStep(2)} />}
                {step === 2 && <ExecuteTransaction />} */}
            </Box>
        </Container>
    );
};

export default TxMaster;
