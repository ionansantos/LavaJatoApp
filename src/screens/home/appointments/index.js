import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext, useAuth} from '../../routes/auth/AuthProvider';
import {useNavigation} from '@react-navigation/native';

export default function Appointments({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bem vindo</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>agendamentos</Text>
      </TouchableOpacity>
    </View>
  );
}
