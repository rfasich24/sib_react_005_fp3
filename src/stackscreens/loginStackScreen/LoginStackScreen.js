import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens';

const LoginStack = createNativeStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
