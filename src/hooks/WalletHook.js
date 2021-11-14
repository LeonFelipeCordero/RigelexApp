import { MsgSend } from '@terra-money/terra.js';
import useKey from './KeysHook';
import useStorage from './StorageHook';
import terra from '../utils/LCD';

export default useWallet = () => {
  const storage = useStorage();
  const key = useKey();

  const isWalletReady = () =>
    storage.getSeed().then((seed) => (seed ? true : false));

  const getWallet = () =>
    storage.getSeed().then((seed) => (seed ? createWallet(seed) : undefined));

  const createNewWallet = (seed) => createWallet(seed);

  const createWallet = (seed) => {
    const mnemonicKey = key.getKeyFromSeed(seed);
    storage.setSeed(seed);
    const newWallet = terra.wallet(mnemonicKey);
    return newWallet;
  };

  const sendTransaction = (receiver, amount, coin, memo) =>
    createAndSignTx(receiver, amount, coin, memo)
      .then((tx) => terra.tx.broadcast(tx))
      .catch((e) => console.log('error broadcasting transaction', e));

  const createAndSignTx = (receiver, amount, coin, memo) =>
    getWallet().then((wallet) => {
      const amountToSend = {};
      amountToSend[coin] = amount;

      const msg = new MsgSend(wallet.key.accAddress, receiver, amountToSend);

      return wallet.createAndSignTx({
        msgs: [msg],
        memo: memo,
      });
    });

  return {
    isWalletReady: isWalletReady,
    createNewWallet: createNewWallet,
    getWallet: getWallet,
    sendTransaction: sendTransaction,
  };
};
