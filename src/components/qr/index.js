import { enc } from 'crypto-js';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { encrypt } from '../../utils/encryption';

const splitter = '::';

export default QR = (props) => {
  const amount = props.amount;
  const coin = props.coin;
  const account = props.account;
  const password = 'RigelexAPP';

  const content = encrypt(
    amount + splitter + coin + splitter + account,
    password
  );

  return <QRCode value={content} size={300} color="black" />;
};
