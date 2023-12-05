import React, {useState, useEffect, useContext} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  Alert,
} from 'react-native';
import {useNavigation, Link, useLinkTo} from '@react-navigation/native';
import {AuthContext} from '../../routes/auth/AuthProvider';
import style from './style';

export default function Login() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 10}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 200, y: 200}));
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );

    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: false,
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
    // return () => unsubscribe();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <View style={style.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../assets/images/logo.png')}
        />
      </View>

      <Animated.View
        style={[
          style.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y,
              },
            ],
          },
        ]}>
        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={style.input}
          placeholder="Senha"
          //keyboardType="visible-password"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={style.buttonSubmit}
          onPress={() => login(email, password)}>
          <Text style={style.submitText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonRegister}>
          <Link to={{screen: 'RegisterScreen'}} style={style.registerText}>
            Novo usuário? criar conta
          </Link>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
