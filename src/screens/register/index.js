import React, {useState, useEffect} from 'react';
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
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import {useNavigation, Link, useLinkTo} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import style from './style';

export default function Register() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 10}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 200, y: 200}));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPress = () => {};

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
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 270,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 165,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 270,
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
          placeholder="Nome"
          keyboardType="default"
          textContentType="name"
          autoCapitalize="none"
          autoCompleteType="name"
          autoCorrect={false}
          onChangeText={text => setName(text)}
          value={name}
        />

        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          value={email}
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
          value={password}
        />
        <TouchableOpacity
          style={style.buttonSubmit}
          onPress={() => onRegisterPress()}>
          <Text style={style.submitText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonRegister}>
          <Link to={{screen: 'LoginScreen'}} style={style.registerText}>
            Já possuo conta!{' '}
          </Link>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
