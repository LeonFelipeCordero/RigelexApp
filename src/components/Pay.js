import React from 'react';
import { Layout } from '@ui-kitten/components';
import QRScanner from '../components/qrScanner';
import { layout } from '../styles/Styles';

export default Pay = (props) => {
  return (
    <Layout style={layout.container}>
      <QRScanner {...props}></QRScanner>
    </Layout>
  );
};
