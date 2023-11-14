import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';
const CallLink = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <View style={styles.linkContainer}>
          <VectorIcon
            name="link"
            color={Colors.white}
            type="Entypo"
            size={22}
            style={styles.iconStyle}
          />
        </View>
        <View style={{marginTop: -6}}>
          <Text style={{color: 'white', fontSize: 16}}>Create call link</Text>
          <Text style={{color: Colors.textGrey}}>
            Share a Link for your WhatsApp Call
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CallLink;

const styles = StyleSheet.create({
  linkContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
  },
  iconStyle: {
    padding: 1,
    borderRadius: 50,
  },
});
