import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import Pay from '../components/Pay';
import Request from '../components/Request';
import Account from '../components/Account';
import useWallet from '../hooks/WalletHook';
import Loading from '../components/loading/Loading';

const HomeIcon = (style) => <Icon {...style} name="swap-outline" />;
const SendIcon = (style) => (
  <Icon {...style} name="diagonal-arrow-right-up-outline" />
);
const RequestIcon = (style) => (
  <Icon {...style} name="diagonal-arrow-left-down-outline" />
);

export default HomeNavigation = (props) => {
  const BottomTab = createBottomTabNavigator();
  const terraWallet = useWallet();
  const [wallet, setWallet] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    terraWallet.getWallet().then((wallet) => {
      setWallet(wallet);
      setLoading(false);
    });
  }, []);

  const BottomTabBar = ({ navigation, state }) => {
    const onSelect = (index) => navigation.navigate(state.routeNames[index]);

    return (
      <SafeAreaView>
        <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
          <BottomNavigationTab title="Pay" icon={SendIcon} />
          <BottomNavigationTab title="Request" icon={RequestIcon} />
          <BottomNavigationTab title="Account" icon={HomeIcon} />
        </BottomNavigation>
      </SafeAreaView>
    );
  };

  return (
    <>
      {loading && <Loading title="Getting wallet..."></Loading>}
      {!loading && (
        <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
          <BottomTab.Screen name="Pay">
            {(props) => <Pay {...props} wallet={wallet}></Pay>}
          </BottomTab.Screen>
          <BottomTab.Screen name="Request">
            {(props) => <Request {...props} wallet={wallet}></Request>}
          </BottomTab.Screen>
          <BottomTab.Screen name="Account">
            {(props) => <Account {...props} wallet={wallet}></Account>}
          </BottomTab.Screen>
        </BottomTab.Navigator>
      )}
    </>
  );
};
