import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
const WhatsappSplashScreen = () => {
  const naviation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      naviation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
      <StatusBar backgroundColor={'#232d36'} />
      <Image
        source={require('../assets/circle.png')}
        style={{width: 400, height: 300, resizeMode: 'contain', marginTop: 50}}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
            alignSelf: 'center',
            marginTop: 90,
            fontFamily: 'monospace',
          }}>
          Welcome To WhatsApp
        </Text>
      </View>
    </View>
  );
};

export default WhatsappSplashScreen;

const styles = StyleSheet.create({});
