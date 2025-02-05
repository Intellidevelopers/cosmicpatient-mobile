import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import colors from '../components/colors';
import HomeScreen from '../screens/HomeScreen';
import Calendar from '../screens/Calendar';
import Messages from '../screens/Messages';
import Analytics from '../screens/Analytics';
import Shop from '../screens/Shop';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home-outline" size={size} color={focused ? colors.primary : '#999'} />;
            case 'Calendar':
              return <AntDesign name="calendar" size={size} color={focused ? colors.primary : '#999'} />;
            case 'Messages':
              return <Ionicons name="chatbox-ellipses-outline" size={size} color={focused ? colors.primary : '#999'} />;
            case 'Shop':
              return <Feather name="shopping-bag" size={size} color={focused ? colors.primary : '#999'} />;
            case 'Analytics':
              return <MaterialIcons name="analytics" size={size} color={focused ? colors.primary : '#999'} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 75,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});