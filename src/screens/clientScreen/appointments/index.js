import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext, useAuth} from '../../../routes/auth/AuthProvider';
import styles from './style';

export default function Appointments({route}) {
  return (
    <View style={styles.container}>
      <Text>Bem vindo</Text>
      {/* <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
        }}
        onPress={logout}>
        <Text style={{color: 'white'}}>desconecta da tela agendamento</Text>
      </TouchableOpacity> */}
    </View>
  );
}
