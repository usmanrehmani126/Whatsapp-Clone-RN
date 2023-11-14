import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';

const ChatScreenFooter = () => {
  const [isMessage, setIsMessage] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            name="emoji-emotions"
            type="MaterialIcons"
            size={20}
            color={Colors.white}
          />
          <TextInput
            placeholder="Message"
            style={styles.textInput}
            placeholderTextColor={Colors.textGrey}
            onChangeText={txt => setIsMessage(txt)}
          />
        </View>
        <View style={styles.row}>
          <VectorIcon
            name="rupee"
            type="FontAwesome"
            size={16}
            color={Colors.white}
            style={styles.iconStyle}
          />
          <VectorIcon
            name="attachment"
            type="Entypo"
            size={16}
            color={Colors.white}
            style={styles.iconStyle}
          />
          <VectorIcon
            name="camera"
            type="FontAwesome5"
            size={16}
            color={Colors.white}
            style={styles.iconStyle}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.rightContainer}>
        <VectorIcon
          name={isMessage ? 'send' : 'microphone'}
          type="MaterialCommunityIcons"
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreenFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: 22,
  },
  rightContainer: {
    padding: 10,
    backgroundColor: Colors.teal,
    borderRadius: 50,
  },
  textInput:{
    marginLeft:4
  }
});
