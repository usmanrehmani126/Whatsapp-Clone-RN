import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect,useState} from 'react';
import ChatListComponent from '../components/ChatListComponent';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import {useNavigation} from '@react-navigation/native';
import {getDeviceId} from '../utlis/HelperFunc';

const ChatListScreen = () => {
  const [userId, setUserId] = useState();
  useEffect(() => {
    getDeviceId().then(id => setUserId(id));
  }, []);
  const navigation = useNavigation();
  const onNavigate=()=>{
    navigation.navigate('contactScreen',{
      userId:userId
    })
  }
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ChatListComponent />
      </ScrollView>
      <TouchableOpacity
        style={styles.doucmentOpener}
        onPress={onNavigate}>
        <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  doucmentOpener: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    right: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
