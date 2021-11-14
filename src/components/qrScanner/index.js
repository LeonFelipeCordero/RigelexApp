import React from 'react';
import { decrypt } from '../../utils/encryption';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default QRScanner = (props) => {
  const password = 'RigelexAPP';

  // props.navigation.navigate('PaymentVerification', {
  //   amount: 1000,
  //   coin: 'ueur',
  //   receiver: 'terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n',
  // });

  // props.navigation.navigate('TransactionOverview', { txHash: testTx.txhash });

  const captured = (value) => {
    const values = decrypt(value.data, password).split('::');
    props.navigation.navigate('PaymentVerification', {
      amount: values[0],
      coin: values[1],
      receiver: values[2],
    });
  };

  return <QRCodeScanner onRead={captured} />;
};

const testTx = {
  gas_used: 76496,
  gas_wanted: 92104,
  height: 18303,
  logs: [
    '{"events":[{"attributes":[{"key":"receiver","value":"terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n"},{"key":"amount","value":"1000ueur"}],"type":"coin_received"},{"attributes":[{"key":"spender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"amount","value":"1000ueur"}],"type":"coin_spent"},{"attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"module","value":"bank"}],"type":"message"},{"attributes":[{"key":"recipient","value":"terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n"},{"key":"sender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"amount","value":"1000ueur"}],"type":"transfer"}]}',
  ],
  raw_log:
    '[{"events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n"},{"key":"amount","value":"1000ueur"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"amount","value":"1000ueur"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"module","value":"bank"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n"},{"key":"sender","value":"terra18wlvftxzj6zt0xugy2lr9nxzu402690ltaf4ss"},{"key":"amount","value":"1000ueur"}]}]}]',
  txhash: 'F6AFCB382777B907AF84402B0CB29C14565C948869DBE14547A8D3E79642267F',
};
