import client from './client';

export default useFcd = () => {
  const url = 'https://bombay-fcd.terra.dev/v1';
  const uri = '/txs';
  const headers = { accept: 'application/json' };

  const getTxsByAddress = (account) =>
    client
      .get(url + uri + `?account=${account}`)
      .then((response) => response.data);

  return {
    getTxsByAddress: getTxsByAddress,
  };
};
