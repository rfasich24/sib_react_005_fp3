import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, SettingStackScreen, FavoriteStackScreen, ProfileStackScreen} from './src/stackscreens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Bookmark') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#3EBDC6',
          tabBarActiveBackgroundColor: '#3EBDC6',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Bookmark" component={FavoriteStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Settings" component={SettingStackScreen} />
      </Tab.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0)" />
    </NavigationContainer>
  );
}
