import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopHeaderComponent from '../components/TopHeaderComponent';
import TopTabBar from '../navigation/TopTabBar';

const HomeScreen = () => {
  return (
    <>
      <TopHeaderComponent />
      <TopTabBar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
