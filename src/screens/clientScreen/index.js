import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext, useAuth} from '../../routes/auth/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home/index';
import Appointments from './appointments/index';
import ProfileClient from './profile/index';
import CustomTabBar from '../../components/CustomTabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function ClientScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
          alignItems: 'center',
          width: 380,
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          title: '',
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons name={'alarm-outline'} color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileClient"
        component={ProfileClient}
        options={{
          title: '',
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color, size}) => {
            return (
              <Ionicons name={'person-outline'} color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#161A30',
    // borderBottomLeftRadius: 26,
    // borderBottomRightRadius: 26,
  },
  title: {
    color: 'white',
  },
});
