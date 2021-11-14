import React, { useEffect, useState } from 'react';
import { Divider, Layout, Text, useTheme } from '@ui-kitten/components';
import useTx from '../hooks/TxHook';
import { layout } from '../styles/Styles';
import useWallet from '../hooks/WalletHook';
import Loading from '../components/loading/Loading';

export default TransactionOverview = (props) => {
  const theme = useTheme();
  const txHook = useTx();
  const terraWallet = useWallet();
  const [tx, setTx] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  useEffect(() => {
    txHook.getTxInfo(props.route.params['txHash']).then(setTx);
  }, []);

  useEffect(() => {
    terraWallet.getWallet().then(setWallet);
  }, []);

  const getCoin = () => {
    const denoms = Object.keys(tx.tx.msg[0].amount._coins)[0];
    return tx.tx.msg[0].amount._coins[denoms];
  };

  const resolveTransactionDirections = () => {
    return wallet.key.accAddress === tx.tx.msg[0].from_address
      ? 'You sent'
      : 'You received';
  };
  return (
    <Layout style={layout.container}>
      {tx && wallet && (
        <>
          <Text category="h1">Transaction Overview</Text>
          <Layout
            style={[
              layout.smallPriceContainer,
              { backgroundColor: theme['color-info-default'] },
            ]}
          >
            <Text status="control" category="label">
              {resolveTransactionDirections()}
            </Text>
            <Text status="control" category="h1">
              {getCoin().denom + ' ' + getCoin().amount}
            </Text>
          </Layout>
          <Layout style={layout.row}>
            <Text>{props.route.params['txHash']}</Text>
          </Layout>
          <Layout style={layout.row}>
            <Text>Fee</Text>
            <Text>{getCoin().denom + ' ' + tx.gas_used}</Text>
          </Layout>
          <Divider />
          <Layout style={layout.row}>
            <Text>Message</Text>
            <Text>{tx.tx.memo}</Text>
          </Layout>
          <Divider />
          <Layout style={layout.row}>
            <Text>Status</Text>
            <Text>{tx.code ? 'Pending' : 'Success'}</Text>
          </Layout>
          <Divider />
        </>
      )}
      {(!tx || !wallet) && <Loading title="Getting transaction..."></Loading>}
    </Layout>
  );
};
