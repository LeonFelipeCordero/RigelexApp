import React, { useEffect } from 'react';
import useWallet from '../hooks/WalletHook';
import Loading from '../components/loading/Loading';

export default EnterPage = (props) => {
  const terraWallet = useWallet();

  useEffect(() => {
    terraWallet.isWalletReady().then((result) => {
      if (result) {
        props.navigation.navigate('Home');
      } else {
        props.navigation.navigate('Onboarding');
      }
    });
  }, []);

  return <Loading title="Getting your data..."></Loading>;
};
