import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import Entypo from 'react-native-vector-icons/dist/Entypo';
const TopHeaderComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../assets/whatsapp-logo.png')}
          style={styles.logoImage}
        />
        <View style={styles.iconStyle}>
          <VectorIcon
            name="camera"
            color={Colors.secondaryColor}
            type="Feather"
            size={20}
          />
          <VectorIcon
            name="search"
            color={Colors.secondaryColor}
            type="Feather"
            size={20}
          />
          <VectorIcon
            name="dots-three-vertical"
            color={Colors.secondaryColor}
            type="Entypo"
            size={18}
          />
        </View>
      </View>
    </View>
  );
};
// 25:24
export default TopHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primaryColor,
    padding: 16,
  },
  logoImage: {
    height: 30,
    width: 120,
    resizeMode: 'contain',
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
});
