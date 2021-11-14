import React from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';
import { layout, button, text, input } from '../styles/Styles';
import useWallet from '../hooks/WalletHook';
import Loading from '../components/loading/Loading';

export default OnBoarding = (props) => {
  const terraWallet = useWallet();
  const [seed, setSeed] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const createNewWallet = () => {
    setLoading(true);
    terraWallet.createNewWallet(seed.trim());
    props.navigation.navigate('Home');
  };

  if (loading) {
    return <Loading title="Creating wallet..."></Loading>;
  } else {
    return (
      <Layout style={layout.containerCenter}>
        <Text style={text.text} category="h1">
          Welcome to Rigelex.
        </Text>
        <Text style={text.text} category="s1">
          Please enter your Terra seed.
        </Text>
        <Input
          size="large"
          placeholder="seed"
          style={input.input}
          value={seed}
          onChangeText={setSeed}
        />
        <Button
          style={button.buttonLeftRight}
          onPress={() => createNewWallet()}
        >
          Start
        </Button>
      </Layout>
    );
  }
};
