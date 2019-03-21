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

firebase.initializeApp(Expo.Constants.manifest.extra.firebase);

export default class HomeScreen extends React.Component {

  static contextType = StateContext;

  componentDidMount = () => {
    console.log('here')
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
        console.log(user);
      }
    });
  }

  signInWithFacebook = () => {
    /*this.context.actions.facebookLogin(mail, mdp).then((res) => {
      console.log('ok connecté')
    })*/
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

              <TouchableOpacity style={styles.logButton} onPress={this.signInWithFacebook}>
                <View style={styles.buttonContent}>
                    <FontAwesome style={[styles.atRight, styles.white]} name="facebook-square" size={15} />
                    <Text style={styles.white}>Se connecter avec Facebook</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.logButton} onPress={this.signInWithFacebook}>
                <View style={styles.buttonContent}>
                    <FontAwesome style={[styles.atRight, styles.white]} name="facebook-square" size={15} />
                    <Text style={styles.white}>Se connecter avec Google    </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.logButton} onPress={this.signInWithFacebook}>
                <View style={styles.buttonContent}>
                    <FontAwesome style={[styles.atRight, styles.white]} name="user" size={15} />
                    <Text style={styles.white}>         Créer un compte           </Text>
                </View>
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

  atRight: {
    position: 'relative',
    right: 15
  },

  atRightPlus: {
    position: 'relative',
    right: 25
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
    justifyContent: 'center'

  },

  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    justifyContent: 'center',
  },

});
