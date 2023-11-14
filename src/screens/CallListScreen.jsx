import {ScrollView, StyleSheet,View} from 'react-native';
import React from 'react';
import CallLink from '../components/CallLink';
import RecentCalls from '../components/RecentCalls';
import {Colors} from '../theme/Colors';

const CallListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CallLink />
        <RecentCalls />
      </ScrollView>
    </View>
  );
};

export default CallListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.background,
  },
});
