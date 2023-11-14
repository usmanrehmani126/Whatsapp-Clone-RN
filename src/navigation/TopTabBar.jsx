import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import StatusListScreen from '../screens/StatusListScreen';
import CallListScreen from '../screens/CallListScreen';
import CommunityScreen from '../screens/CommunityScreen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
const Tab = createMaterialTopTabNavigator();
const TopTabBar = () => {
  return (
    <Tab.Navigator
    initialRouteName='Chats'
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
          height: 3,
          borderRadius: 15,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color}) => (
            <VectorIcon
              name="users"
              type="FontAwesome"
              color={color}
              size={18}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Chats" component={ChatListScreen} />
      <Tab.Screen name="Status" component={StatusListScreen} />
      <Tab.Screen name="Call" component={CallListScreen} />
    </Tab.Navigator>
  );
};

export default TopTabBar;

const styles = StyleSheet.create({});
