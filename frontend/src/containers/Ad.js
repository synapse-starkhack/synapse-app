import Ad from '../components/Ad';

const AdContainer = ({ onSubmit }) => {
    return (
        <>
            <Ad id="starknet" onSubmit={onSubmit} />
        </>
    );
};

export default AdContainer;
