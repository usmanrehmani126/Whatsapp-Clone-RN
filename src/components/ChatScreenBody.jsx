import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import {MessagesData} from '../data/MessageData';
const ChatScreenBody = () => {
  const userId = '1jdfnvchjkd';
  const scrollViewRef = useRef();
  const scrollToEndFunc = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  const UserSenderMessageView = ({message, time}) => {
    return (
      <View style={styles.UserSenderMessageView}>
        <View style={styles.UserInnerSenderMessageView}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };
  const UserReceiverMessageView = ({message, time}) => {
    return (
      <View style={styles.UserReceiverMessageView}>
        <View style={styles.UserInnerReceiverMessageView}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="checkmark-done"
            type="Ionicons"
            style={styles.douleCheckIcon}
            color={Colors.blue}
            size={12}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToEndFunc}
        ref={scrollViewRef}>
        {MessagesData.map((msg, index) => {
          return (
            <View key={index}>
              {msg.id === userId ? (
                <UserReceiverMessageView
                  message={msg.message}
                  time={msg.time}
                />
              ) : (
                <UserSenderMessageView message={msg.message} time={msg.time} />
              )}
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.srollIcon} onPress={scrollToEndFunc}>
        <VectorIcon
          name="chevrons-down"
          type="Feather"
          color={Colors.white}
          size={16}
        />
      </TouchableOpacity>
    </>
  );
};
export default ChatScreenBody;
const styles = StyleSheet.create({
  UserReceiverMessageView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  UserSenderMessageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserInnerReceiverMessageView: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'flex-end',
  },
  UserInnerSenderMessageView: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 8,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  message: {
    fontSize: 13,
    color: Colors.white,
    // width:"80%",
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5,
  },
  douleCheckIcon: {
    marginLeft: 5,
  },
  srollIcon: {
    position: 'absolute',
    padding: 6,
    borderRadius: 50,
    backgroundColor: Colors.primaryColor,
    bottom: 15,
    right: 6,
  },
});
