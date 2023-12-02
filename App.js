/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer, View} from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeClientScreen from './src/screens/home/index';
import HomeAdmScreen from './src/screens/homeAdm/index';
import LoginScreen from './src/screens/login/index';
import RegisterScreen from './src/screens/register/index';
import Loading from './src/components/loading';
import {useAuth, AuthProvider} from './src/routes/auth/AuthProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Appointments from './src/screens/home/appointments/index';
import ProfileClient from './src/screens/home/profile/index';
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen
            name="HomeClientScreen"
            component={HomeClientStackNavigator}
            initialParams={{userData: user}}
          />
          <Stack.Screen
            name="HomeAdmScreen"
            component={HomeAdmStackNavigator}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

function HomeClientStackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#5FBDFF'},
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({name, red, size}) => {
            return (
              <Ionicons name={'alarm-outline'} color={'#5FBDFF'} size={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileClient"
        component={ProfileClient}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#5FBDFF'},
          tabBarLabel: 'Perfil',
          tabBarIcon: ({name, red, size}) => {
            return (
              <Ionicons name={'person-outline'} color={'#5FBDFF'} size={30} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeAdmStackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeClientScreen" component={HomeClientScreen} />
      <Tab.Screen name="HomeAdmScreen" component={HomeAdmScreen} />
    </Tab.Navigator>
  );
}
