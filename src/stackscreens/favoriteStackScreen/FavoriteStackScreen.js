import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoriteScreen } from './screens';

const FavoriteStack = createNativeStackNavigator();

const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackScreen;
