import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import {AuthContext} from '../../routes/auth/AuthProvider';

export default function Home() {
  //   const {user, userType, userName, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome cliente</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
}
