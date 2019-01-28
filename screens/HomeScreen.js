import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import icon from '../assets/images/onedrink.png'
import { MonoText } from '../components/StyledText';
import fond from '../assets/images/fond.jpg';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtBDYT0t9BRmfxZGY7g68gcwJZX0gvma0",
  authDomain: "onedrink-ca4b8.firebaseapp.com",
  databaseURL: "https://onedrink-ca4b8.firebaseio.com",
  projectId: "onedrink-ca4b8",
  storageBucket: "onedrink-ca4b8.appspot.com",
  messagingSenderId: "798193903240"
};

firebase.initializeApp(firebaseConfig);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount = () => {
    console.log('here')
    // Listen for authentication state to change.
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }

  // Do other things
    });
  }


  async logIn() {
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('151603618878634', {
      permissions: ['public_profile'],
    });
    
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    }
  }

  render() {
    return (

    <ImageBackground source={fond} style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      
        
          <View style={styles.welcomeContainer}>
            <Image
              source={icon}
              style={styles.welcomeImage}
            />
            <Text style={styles.getStartedText}>One Drink</Text>
          </View>

          <View style={styles.getStartedContainer}>
              <TouchableOpacity style={styles.logButton} onPress={this.logIn}>
                <View style={styles.buttonContent}>
                    <FontAwesome style={[styles.atLeft, styles.white]} name="facebook-square" size={15} />
                    <Text styles={styles.white}>Se connecter avec Facebook</Text>
                </View>
              </TouchableOpacity>
              

              <TouchableOpacity style={styles.logButton} onPress={this.logIn}>
                <Text style={styles.logText}>Se connecter avec Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logButton} onPress={this.logIn}>
                <Text style={styles.logText}>Créer un compte</Text>
              </TouchableOpacity>
          </View>
 
        </ScrollView>
      </ImageBackground>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'rgba(0,0,0,.6)',
    
  },

  white: {
    color: 'white',
  },

  atLeft: {
    position: 'relative',
    right: 15
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    marginTop: '30%',
    alignItems: 'center',
    marginHorizontal: 50,
  },

  logButton: {
    backgroundColor: '#64489b',
    height: 50,
    width: '100%',
    borderRadius: 25,
    marginTop: '4%',
  },

  logText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },

  buttonContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'

  },

  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
  },

});
