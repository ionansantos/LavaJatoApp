/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer, View} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ClientScreen from './src/screens/clientScreen/index';
import AdmScreen from './src/screens/admScreen/index';
import LoginScreen from './src/screens/login/index';
import RegisterScreen from './src/screens/register/index';
import Loading from './src/components/loading';
import {useAuth, AuthProvider} from './src/routes/auth/AuthProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Appointments from './src/screens/clientScreen/appointments/index';
// import ProfileClient from './src/screens/clientScreen/profile/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

function MainNavigator() {
  const {user, loading} = useAuth();
  console.log(user, 'aqui no app');

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={user ? 'ClientOrAdmScreen' : 'LoginScreen'}>
      {user ? (
        <Stack.Screen
          name="ClientOrAdmScreen"
          component={user.userType === 'cliente' ? ClientScreen : AdmScreen}
          initialParams={{userData: user}}
        />
      ) : null}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
