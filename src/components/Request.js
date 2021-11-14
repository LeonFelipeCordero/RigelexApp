import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Layout,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import useLCD from '../hooks/LCDHook';
import { layout, input, button } from '../styles/Styles';

export default Request = (props) => {
  const lcdTerra = useLCD();
  const [amount, setAmount] = useState('1');
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState('ueur');

  useEffect(() => {
    lcdTerra.findCoins().then((coins) => {
      setCoins(coins);
      setCoin(coins[0]);
    });
  }, []);

  const validateInput = (value) => {
    const lastValue = value.slice(-1);
    if (!isNaN(lastValue) || lastValue === ',') {
      setAmount(value);
    }
  };

  const selectCoin = (selection) => setCoin(coins[selection.row]);

  const next = () => {
    props.navigation.navigate('QR', {
      amount: amount,
      coin: coin,
      account: props.wallet.key.accAddress,
    });
  };

  return (
    <Layout style={layout.containerCenter2}>
      <Layout style={layout.containerInput} level="1">
        <Input
          size="large"
          placeholder="0,00"
          style={input.input}
          value={amount}
          onChangeText={validateInput}
          label="Amount"
        />
        <Select
          size="large"
          placeholder="Coin"
          style={input.select}
          label="Coin"
          value={coin}
          onSelect={(selection) => selectCoin(selection)}
        >
          {coins.map((coin) => (
            <SelectItem title={coin} key={coin}></SelectItem>
          ))}
        </Select>
      </Layout>
      <Button style={button.buttonLeftRight} onPress={next}>
        next
      </Button>
    </Layout>
  );
};
