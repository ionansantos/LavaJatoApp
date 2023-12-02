import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext, useAuth} from '../../routes/auth/AuthProvider';
import {useNavigation} from '@react-navigation/native';

export default function Home({route}) {
  const {logout} = useContext(AuthContext);
  // const {userData} = route.params;

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
        <Text style={{color: 'white'}}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
}
