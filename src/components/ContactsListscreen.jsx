import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {getImage} from '../utlis/HelperFunc';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/Colors';
const ContactsListscreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getImage();
    getUserData()
      .then(res => setUsers(res))
      .catch(error => console.log('error :', error));
  }, []);

  const getUserData = async () => {
    const userRef = await firestore().collection('users').get();
    const userData = Promise.all(
      userRef.docs.map(async item => {
        const id = item.id;
        const name = item.data().name;
        const profile = await getImage(item.data().profile);
        return {
          id,
          name,
          profile,
        };
      }),
    );
    return userData;
  };

  return (
    <View style={{padding: 12, backgroundColor: Colors.background, flex: 1}}>
      <Text style={{color: 'gray', fontSize: 12}}>Contacts on WhatsApp</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(cnt => {
          return (
            <Pressable
              onPress={() => navigation.navigate('ChatScreen', {...cnt})}
              key={cnt.id}
              style={{
                padding: 6,
                marginVertical: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={{uri: cnt.profile}} style={styles.profilePic} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  marginLeft: 20,
                  fontSize: 18,
                }}>
                {cnt.name}.
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactsListscreen;

const styles = StyleSheet.create({
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 6,
  },
});
