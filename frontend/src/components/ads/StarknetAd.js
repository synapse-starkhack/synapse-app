import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StarknetAd = ({ onSubmit }) => {
    const [value, setValue] = useState();
    const handleChange = e => setValue(e.target?.value);
    const handleOnSubmit = () => {
        console.log(value);
        value === 'a' && onSubmit(true)
    };

    return (
        <Box>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/T6OtIrPINiQ?si=rWz3V4JasVb-DVNw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
            <Box>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">What is Account Abstraction?</FormLabel>
                    <RadioGroup
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="a" control={<Radio />} label="Smart Account" />
                        <FormControlLabel value="b" control={<Radio />} label="EOA Account" />
                        <FormControlLabel value="c" control={<Radio />} label="Multisig Account" />
                        <FormControlLabel value="d" control={<Radio />} label="Keyless Account" />
                    </RadioGroup>
                    <Button variant="contained" onClick={handleOnSubmit}>Submit</Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default StarknetAd;
