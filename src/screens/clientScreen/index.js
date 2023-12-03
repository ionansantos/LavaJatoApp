import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext, useAuth} from '../../routes/auth/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home/index';
import Appointments from './appointments/index';
import ProfileClient from './profile/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function ClientScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#5FBDFF'},
          tabBarLabel: 'Inicio',
          tabBarIcon: ({name, red, size}) => {
            return (
              <Ionicons name={'home-outline'} color={'#5FBDFF'} size={30} />
            );
          },
        }}
      />
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
          tabBarLabel: 'Meu Perfil',
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
