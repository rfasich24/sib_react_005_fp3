import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BookingScreen from '../../screens/homeScreen/BookingScreen';
import DetailCard from '../../screens/homeScreen/DetailCard';
import HomeScreen from '../../screens/homeScreen/HomeScreen';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailCard" component={DetailCard} />
      <HomeStack.Screen name="BookingScreen" component={BookingScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
