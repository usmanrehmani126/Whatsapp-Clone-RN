import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatScreenHeader from '../components/ChatScreenHeader';
import ChatScreenBody from '../components/ChatScreenBody';
import ChatScreenFooter from '../components/ChatScreenFooter';

const ChatScreen = () => {
  
  return (
    <>
      <ChatScreenHeader />
      <ImageBackground source={require('../assets/wallpaper.jpeg')} style={styles.backImage}>
      <ChatScreenBody />
      </ImageBackground>
      <ChatScreenFooter />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  backImage:{
    flex:1,
    padding:10
  }
});
