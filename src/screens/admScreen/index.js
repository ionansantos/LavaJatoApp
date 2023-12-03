import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../routes/auth/AuthProvider';

export default function AdmScreen() {
  const {user, userType, userName, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Welcome {userName} você é o {userType}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
        }}
        onPress={() => logout()}>
        <Text style={{color: 'white'}}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
}
