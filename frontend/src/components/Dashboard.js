import { useUser } from '../contexts/UserContext';
import { Typography } from '@mui/material';

const Dashboard = () => {
    const user = useUser();
    return (
        <>
            <Typography variant='h5' margin={4}>Coming Soon......</Typography>
        </>
    )
}

export default Dashboard;
