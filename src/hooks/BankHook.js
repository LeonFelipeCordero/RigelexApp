import terra from '../utils/LCD';

export default useBank = () => {
  const getBalance = (address) =>
    terra.bank
      .balance(address)
      .then((balance) => Object.values(balance._coins));

  return {
    getBalance: getBalance,
  };
};
