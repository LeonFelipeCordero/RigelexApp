import terra from '../utils/LCD';

export default useLCD = () => {
  const findCoins = () =>
    terra.supply
      .total()
      .then((coins) => coins.denoms().filter((coin) => coin.length < 10));

  return {
    findCoins: findCoins,
  };
};
