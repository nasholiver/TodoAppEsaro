// CreateAccountScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../store/authSlice';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccountScreen() {
  const [full_name, setfull_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const goToLogin = () => navigation.navigate('Login');
  const dispatch = useDispatch();
  const accountStatus = useSelector((state) => state.auth.status);
  const accountError = useSelector((state) => state.auth.error);

  const handleCreateAccount = async() => {
    // Dispatch the createAccount action to send a POST request
    const res = await dispatch(createAccount({ full_name, email, password }));
    console.log(res);
    if (res.payload.status === 'success') {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
    <Image
        style={styles.topCornerImage}
        source={require('../../assets/bubble.png')}
        />
       <View style={styles.welcome}>
        <Text style={styles.title}>Welcome Onboard!
</Text>
        <Text style={styles.welcomesubtitle}>
        Lets help you in completing your tasks
            </Text>
            </View>
    <View style={styles.textContainer}>
      
      <Text style={styles.label}>
        Full Name
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Mary Elliot"
        value={full_name}
        onChangeText={text => setfull_name(text)}
      />
      <Text style={styles.label}>
        Email
        </Text>
      <TextInput
        style={styles.input}
        placeholder="mary.elliot@mail.com"
        value={email}
        onChangeText={text => setEmail(text)}
      />
        <Text style={styles.label}>
        Password
        </Text>
      <TextInput
        style={styles.input}
        placeholder="**************"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.label}>
        Repeat Password
        </Text>
      <TextInput
        style={styles.input}
        placeholder="**************"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      {accountStatus === 'loading' && <Text>Loading...</Text>}
      {accountStatus === 'succeess' && <Text>Account created successfully!</Text>}
      {accountStatus === 'failed' && <Text>Account creation failed: {accountError}</Text>}
        <View style={styles.textBottomContainer}>
      <Text >Already have an account?</Text>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.linkText}>Signin</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    welcome: {
      width: "100%",
      marginTop: 164,
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
      marginTop: 100,
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
        fontWeight: '700',
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
      fontWeight: '700',
      lineHeight: 23,
      letterSpacing: 0,
      
      textAlign: 'center',
    },
 
    subtitle: {
      width: 244,
      //fontSize: 15,
      color: '#000000',
      //fontWeight: '600',
      lineHeight: 23,
      letterSpacing: 0,
      
      textAlign: 'center',
    },
    input: {
      width: 240,
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
      fontWeight: '700',
      textAlign: 'center',
    },
    linkText: {
      color: '#62D2C3',
    },
  });

  