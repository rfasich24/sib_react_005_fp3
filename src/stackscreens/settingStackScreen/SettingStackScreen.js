import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingScreen } from './screens';

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
