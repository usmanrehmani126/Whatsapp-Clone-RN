import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ChatScreenHeader = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <VectorIcon
            name="arrow-back"
            type="Ionicons"
            size={22}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/user1.jpeg')}
          style={styles.profilePic}
        />
        <Text style={styles.userName}> Usman</Text>
      </View>
      <View style={styles.iconStyle}>
        <VectorIcon
          name="videocam"
          color={Colors.white}
          type="Ionicons"
          size={20}
        />
        <VectorIcon
          name="call"
          color={Colors.white}
          type="MaterialIcons"
          size={20}
        />
        <VectorIcon
          name="dots-three-vertical"
          color={Colors.white}
          type="Entypo"
          size={18}
        />
      </View>
    </View>
  );
};

export default ChatScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 6,
  },
  userName: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 16,
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
});
