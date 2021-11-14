import React, { useState, useEffect } from 'react';
import { Divider, Layout, Text } from '@ui-kitten/components';
import useBank from '../hooks/BankHook';
import { layout, text } from '../styles/Styles';
import TransactionsList from './transactions';
import useFcd from '../http/fcdClient';
import Loading from './loading/Loading';

export default Account = (props) => {
  const terraBank = useBank();
  const fcdClient = useFcd();
  const [wallet, setWallet] = useState(props.wallet);
  const [balance, setBalance] = useState([]);
  const [transactions, setTransactions] = useState(undefined);

  useEffect(() => {
    terraBank.getBalance(wallet.key.accAddress).then(setBalance);
  }, []);

  useEffect(() => {
    fcdClient.getTxsByAddress(wallet.key.accAddress).then(setTransactions);
  }, []);

  return (
    <Layout style={layout.container}>
      {wallet && (
        <>
          <Layout style={layout.row}>
            <Text category="h5">Address</Text>
            <Text>{wallet.key.accAddress}</Text>
          </Layout>
          <Text style={text.subTitle} category="h5">
            Balance
          </Text>
          {balance.map((coin) => (
            <Layout key={coin.denom} style={layout.row}>
              <Text>{coin.denom}</Text>
              <Text>{coin.amount.toString()}</Text>
              <Divider />
            </Layout>
          ))}
          {transactions && (
            <Layout>
              <Text style={text.subTitle} category="h5">
                Transactions
              </Text>
              <TransactionsList
                {...props}
                transactions={transactions}
              ></TransactionsList>
            </Layout>
          )}
          {!transactions && <Loading title="getting account..."></Loading>}
        </>
      )}
      {!wallet && <Loading title="Getting wallet..."></Loading>}
    </Layout>
  );
};
