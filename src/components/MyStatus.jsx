import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';
const MyStatus = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <TouchableOpacity>
          <Image
            source={require('../assets/user1.jpeg')}
            style={styles.profilePic}
          />
          <VectorIcon
            name="plus"
            color={Colors.white}
            type="Entypo"
            size={18}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <View style={{marginTop: -6}}>
          <Text style={{color: 'white', fontSize: 16}}>Status Owner</Text>
          <Text style={{color: 'gray'}}>Tap to add status update</Text>
        </View>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: Colors.primaryColor,
      },
      profilePic: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: 6,
        marginTop: 4,
        marginTop: -2
      },
      iconStyle: {
        position: 'absolute',
        bottom: 2,
        right: 3,
        backgroundColor: Colors.tertiary,
        padding: 1,
        borderRadius: 50,
      },
});
