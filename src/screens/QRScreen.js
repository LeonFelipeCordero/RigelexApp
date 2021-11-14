import React from 'react';
import { Layout } from '@ui-kitten/components';
import QR from '../components/qr';
import { layout } from '../styles/Styles';

export default QRScreen = (props) => {
  const amount = props.route.params['amount'];
  const coin = props.route.params['coin'];
  const account = props.route.params['account'];

  return (
    <Layout style={layout.containerCenter}>
      <QR amount={amount} coin={coin} account={account}></QR>
    </Layout>
  );
};
