import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { StarknetWalletConnectors } from '@dynamic-labs/starknet';

const Dynamic = () => {

    return (
        <DynamicContextProvider
            settings={{
            environmentId: 'dd8176a8-0d87-4398-94f9-b8479941e67a',
            walletConnectors: [EthereumWalletConnectors, StarknetWalletConnectors],
            }}>
            <DynamicWidget />
        </DynamicContextProvider>
    );
};

export default Dynamic;
