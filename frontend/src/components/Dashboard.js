import { useUser } from '../contexts/UserContext';

const Dashboard = () => {
    const user = useUser();
    return (
        <>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.addresses.evm}</p>
            <p>{user.addresses.starknet}</p>
        </>
    )
}

export default Dashboard;
