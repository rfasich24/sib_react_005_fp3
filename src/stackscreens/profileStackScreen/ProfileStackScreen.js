import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteScreen, ProfileScreen } from './screens';

const ProfilStack = createNativeStackNavigator();

const ProfilStackScreen = () => {
  return (
    <ProfilStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfilStack.Screen name="ProfilScreen" component={ProfileScreen} />
    </ProfilStack.Navigator>
  );
};

export default ProfilStackScreen;
