import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactsHeader from '../components/ContactsHeader';
import { Colors } from '../theme/Colors';
import ContactsListscreen from '../components/ContactsListscreen';

const ContactScreen = () => {
  return (
    <View style={{backgroundColor:Colors.primaryColor,flex:1}}>
     <ContactsHeader  />
     <ContactsListscreen />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
