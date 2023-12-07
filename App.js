/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, View} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth, AuthProvider} from './src/routes/auth/AuthProvider';
import ClientScreen from './src/screens/clientScreen/index';
import AdmScreen from './src/screens/admScreen/index';
import LoginScreen from './src/screens/login/index';
import RegisterScreen from './src/screens/register/index';
import Loading from './src/components/loading';

const Stack = createStackNavigator();

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
    // <Text>lslslsl</Text>
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
