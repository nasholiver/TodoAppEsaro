import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch for Redux actions
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../store/authSlice'; // Import the loginUser action

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const accountStatus = useSelector((state) => state.auth.status);
  const accountError = useSelector((state) => state.auth.error);

  const goToSignup = () => navigation.navigate('Signup'); // Navigate to the Signup screen

  const handleLogin = async() => {
    // Dispatch the login action to send a POST request (make sure you have the 'login' action set up)
    const res = await dispatch(loginUser({ email, password }));
    console.log('Login button pressed', res);
    if (res.payload.status === 'success') {
      navigation.navigate('TodoList');
    }
    
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bubble.png')} style={styles.topCornerImage} />
      <View style={styles.welcome}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Image source={require('../../assets/welcome_back.png')} 
        style={styles.topImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="**************"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {accountStatus === 'error' && <Text style={{ color: 'red' }}>{accountError}</Text>}
       
        <View style={styles.textBottomContainer}>
          <Text style={styles.welcomesubtitle}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={styles.linkText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    width: '100%',
    marginTop: 384,
  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage : {
    //

   width:187,
    height:170,
    resizeMode:'contain',
    marginTop: "164px",
   
  },
  topCornerImage: {
    position: 'absolute',
    top: -35,
    left: 0,
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 80,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: -4,
    color: '#000000',
    //fontSize: 15,
    fontWeight: '600',
    lineHeight: 23,
    letterSpacing: 0,
    
  },
  title: {
    //fontSize: 22,
    fontWeight: '700',
    lineHeight: 33,
    letterSpacing: 0,
    color: '#000000',
    
  },
  welcomesubtitle: {
    //fontSize: 15,
    color: '#000000',
    //fontWeight: '600',
    lineHeight: 23,
    letterSpacing: 0,
    
    textAlign: 'center',
  },
  input: {
    width: 230,
    height: 50,
    margin: 12,
    padding: 10,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  button: {
    width: 300,
    padding: 15,
    backgroundColor: '#62D2C3',
    marginTop: 70,
  },
  buttonText: {
    //fontSize: 16,
    color: 'black',
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#62D2C3',
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#62D2C3',
    marginTop: 3,
  },
});
