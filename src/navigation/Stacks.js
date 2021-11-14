import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterPage from '../screens/EnterPage';
import HomeNavigation from './HomeNavigation';
import OnBoarding from '../screens/OnBoarding';
import QRScreen from '../screens/QRScreen';
import PaymentVerification from '../screens/PaymentVerification';
import TransactionOverview from '../screens/TransactionOverview';

const enterPageComponent = (props) => <EnterPage {...props} />;

export default Screens = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EnterPage"
          component={enterPageComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QR"
          component={QRScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentVerification"
          component={PaymentVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionOverview"
          component={TransactionOverview}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
