import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplaschScreen from './screens/SplaschScreen';
import Onboarding from './screens/Onboarding';
import GetStarted from './screens/GetStarted';
import OtpVerification from './screens/OtpVerification';
import Registration from './screens/Registration';
import EmailRegister from './screens/EmailRegister';
import LoginScreen from './screens/LoginScreen';
import PasswordReset from './screens/PasswordReset';
import EmailPasswordReset from './screens/EmailPasswordReset';
import PasswordResetVerification from './screens/PasswordResetVerification';
import ChangePassword from './screens/ChangePassword';
import PasswordResetSuccess from './screens/PasswordResetSuccess';
// import HomeTab from './components/HomeTab';
import { StatusBar } from 'expo-status-bar';
import HomeTab from './components/HomeTab';
import ProductDetails from './screens/ProductDetails';
import SearchScreen from './screens/SearchScreen';
import Specialists from './screens/Specialists';
import Products from './screens/Products';
import DoctorList from './screens/DoctorList';
import DoctorProfile from './screens/DoctorProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplaschScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="EmailRegister" component={EmailRegister} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} options={{ headerShown: false }} />
        <Stack.Screen name="EmailPasswordReset" component={EmailPasswordReset} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetVerification" component={PasswordResetVerification} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordResetSuccess" component={PasswordResetSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Specialists" component={Specialists} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorList" component={DoctorList} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}