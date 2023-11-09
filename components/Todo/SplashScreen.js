import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <Image
        style={styles.topCornerImage}
        source={require('../../assets/bubble.png')}
        />
        <Image source={require('../../assets/splash_image.png')} 
        style={styles.topImage}
        />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get thing done with Todo</Text>
        <Text style={styles.subtitle}>
       
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed posuere gravida purus id eu condimentum est diam quam. 
            Condimentum blandit diam.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Get  Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
topImage : {
    //
   width:187.5,
    height:170,
    resizeMode:'contain',
    marginTop: 164,
   
   
  },
    topCornerImage : {
        position: 'absolute',
        top: -35,
        left: 0,
        width: 220,
        height: 220,
        // resizeMode:'contain',
    },
  container: {
    
   
    justifyContent: 'center',
    alignItems: 'center',
  },
    textContainer: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
  title: {
    lineHeight: 36,
     fontWeight: '700',
    lineHeight: 33,
    letterSpacing: 0,
    
    color: '#000000',

  },
  subtitle: {
    width: 244,
    //fontSize: 15,
    color: '#000000',
     fontWeight: '700',
    lineHeight: 23,
    
    textAlign: 'center',

  },
  button: {
    // full width button
    width: 300,
    padding: 15,
    backgroundColor: '#62D2C3', // Main color
    marginTop: 70,

   

  },
  buttonText: {
    //fontSize: 16,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SplashScreen;
