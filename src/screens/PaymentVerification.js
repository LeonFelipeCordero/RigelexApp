import React from 'react';
import { Button, Layout, Text, useTheme } from '@ui-kitten/components';
import useWallet from '../hooks/WalletHook';
import { layout, button } from '../styles/Styles';
import { useEffect } from 'react/cjs/react.development';

export default PaymentVerification = (props) => {
  const theme = useTheme();
  const terraWallet = useWallet();
  const amount = props.route.params['amount'];
  const coin = props.route.params['coin'];
  const receiver = props.route.params['receiver'];

  const sendTransaction = () =>
    terraWallet
      .sendTransaction(receiver, amount, coin, 'my custom memo for now')
      .then((tx) =>
        props.navigation.navigate('TransactionOverview', {
          txHash: tx.txhash,
        })
      )
      .catch((e) => console.log('error receiving transaction', e));

  return (
    <Layout style={layout.container} level="3">
      <Layout
        style={[
          layout.priceContainer,
          { backgroundColor: theme['color-info-default'] },
        ]}
      >
        <Text status="control" category="h3">
          Total Payment
        </Text>
        <Text status="control" category="h1">
          {coin + ' ' + amount}
        </Text>
      </Layout>
      <Button style={button.buttonLeftRight} onPress={sendTransaction}>
        Confirm
      </Button>
    </Layout>
  );
};
