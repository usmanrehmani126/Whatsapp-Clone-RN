import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import MyStatus from '../components/MyStatus';
import ViewedStatus from '../components/ViewedStatus';
import RecentStatus from '../components/RecentStatus';
const StatusListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <MyStatus />
        <RecentStatus />
        <ViewedStatus />
      </View>
    </ScrollView>
  );
};
export default StatusListScreen;
const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.background,
  },
});
