import terra from '../utils/LCD';

export default useTx = () => {
  const getTxInfo = (txHash) => terra.tx.txInfo(txHash);

  return {
    getTxInfo: getTxInfo,
  };
};
