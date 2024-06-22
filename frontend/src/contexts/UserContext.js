import { createContext, useContext } from 'react';

// TODO: Remove this.
const userData = {
    id: 101,
    name: 'User 1',
    balance: 0.1,
    addresses: {
      evm: '0x99',
      starknet: '0x001',
      solana: '0x000x',
    },
  };

const UserContext = createContext(userData);

const UserContextProvider = ({ children }) => {

    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

export default UserContextProvider;
