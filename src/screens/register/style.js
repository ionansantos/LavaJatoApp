import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#edf2fb',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 60,
  },

  /*
  logo: {
    width: 170,
    height: 195
  },
  */

  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  input: {
    backgroundColor: '#FFF',
    width: 300,
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10,
  },

  buttonSubmit: {
    backgroundColor: '#161A30',
    width: 200,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  submitText: {
    color: '#FFF',
    fontSize: 19,
  },

  buttonRegister: {
    marginTop: 10,
  },

  registerText: {
    color: '#000814',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
