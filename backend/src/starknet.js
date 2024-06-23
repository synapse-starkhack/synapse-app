const { Account, Contract, RpcProvider } = require('starknet');
const dotenv = require('dotenv');

dotenv.config();

const addrETH = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
const addrSTAK = '0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d';


async function transfer({ recipient = '0x18c66a1cf1cd10579342e365fbb95a941b1f3b3ebbc46934e60a20b63452fc4', ticket = 'strk', amount = 0.001 }) {
    const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_ENDPOINT });

    // initialize existing sender account
    const privateKey = process.env.STARKNET_PRIVATE_KEY;
    const accountAddress = process.env.STARKNET_ADDRESS;
    const account = new Account(provider, accountAddress, privateKey);
    console.log("Account connected.\n");

    const { abi } = await provider.getClassAt(addrSTAK);    
    const contract = new Contract(abi, addrSTAK, provider);

    // Check balance
    console.log(`Calling Starknet for account balance...`);
    const balanceInitial = await contract.balanceOf(account.address);
    console.log('account has a balance of:', balanceInitial);

    // Execute tx transfer of 0.01 tokens to account 1
    console.log(`Invoke Tx - Transfer ${amount} ${ticket} tokens to ${recipient}`);
    // const toTransferTk = cairo.uint256(amount * 10 ** 15);
    const transferCall = contract.populate('transfer', { recipient, amount: amount * 10 ** 18 });
    const { transaction_hash: transferTxHash } = await account.execute(transferCall);
 
    // Wait for the invoke transaction to be accepted on Starknet
    console.log(`Waiting for Tx to be Accepted on Starknet - Transfer...`);
    await provider.waitForTransaction(transferTxHash);

    // Check balance after transfer
    console.log(`Calling Starknet for account balance...`);
    const balanceAfterTransfer = await contract.balanceOf(account.address);
    console.log('account has a balance of:', balanceAfterTransfer);
    console.log('✅ Script completed.');
    return transferTxHash;
}

exports.transfer = transfer;
