import React, {createContext, useContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async authUser => {
      if (authUser) {
        try {
          const userDoc = await firestore()
            .collection('users')
            .doc(authUser.uid)
            .get();
          const userData = userDoc.data();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function login(email, password) {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          const uid = response.user.uid;
          const usersRef = firestore().collection('users');
          usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
              if (!firestoreDocument) {
                Alert.alert('ops!', 'usuário não encontrado', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
                return;
              }
              const userData = firestoreDocument.data();

              if (userData.userType === 'cliente') {
                setUser(userData);
                navigation.navigate('ClientOrAdmScreen', {
                  screen: 'ClientScreen',
                  params: {userData},
                });
              } else {
                setUser(userData);
                navigation.navigate('ClientOrAdmScreen', {
                  screen: 'AdmScreen',
                  params: {userData},
                });
              }
            })
            .catch(error => {
              Alert.alert('ops!', error, [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            });
        });
    } catch (e) {
      Alert.alert('ops!', 'credenciais inválidas!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log(' eita', e);
    }
  }

  async function register(name, email, password) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      await firestore().collection('users').doc(user.id).set({
        name,
        userType: 'cliente',
      });

      setUser({uid: user.uid, name, userType: 'cliente'});
      Alert.alert('Sucesso!', 'Cadastro Realizado!', [
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    } catch (e) {
      Alert.alert('ops!', 'falha ao cadastrar!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log(e);
    }
  }

  async function logout() {
    try {
      await auth().signOut();
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    } catch (e) {
      console.error('Error during logout:', e);
    }
  }

  return (
    <AuthContext.Provider value={{user, loading, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
