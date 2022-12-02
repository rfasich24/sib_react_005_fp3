import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingScreen from '../../screens/settingScreen/SettingScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import InformationScreen from '../../screens/settingScreen/InformationScreen';

const SettingStack = createNativeStackNavigator();
const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
      <SettingStack.Screen name="LoginScreen" component={LoginScreen} />
      <SettingStack.Screen name="InformationScreen" component={InformationScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
