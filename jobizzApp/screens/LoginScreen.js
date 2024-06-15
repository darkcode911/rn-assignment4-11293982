import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subTitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <FontAwesome name="apple" size={32} color="black" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="google" size={32} color="black" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={32} color="black" style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Haven't an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 120, 
    backgroundColor: '#FAFAFD',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    alignSelf: 'flex-start',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '95%',
    height: 55,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '95%',
    height: 50,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    color: 'gray',
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  registerText: {
    color: '#4A90E2',
    marginTop: 20,
  },
});

export default LoginScreen;