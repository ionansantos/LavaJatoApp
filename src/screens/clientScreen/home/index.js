import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {AuthContext, useAuth} from '../../../routes/auth/AuthProvider';
// import {AuthContext} from '../../routes/auth/AuthProvider';

export default function Home() {
  //   const {user, userType, userName, logout} = useContext(AuthContext);
  const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bem vindo</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
        }}
        onPress={logout}>
        <Text style={{color: 'white'}}>desconecta da tela agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}
