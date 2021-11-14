import { MnemonicKey } from '@terra-money/terra.js';

export default useKeys = () => {
  const getKeyFromSeed = (seed) => new MnemonicKey({ mnemonic: seed });

  return {
    getKeyFromSeed: getKeyFromSeed,
  };
};
