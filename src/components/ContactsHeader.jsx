import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';

const ContactsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <VectorIcon
          name="arrow-back"
          type="Ionicons"
          size={22}
          color={Colors.white}
        />
        <View>
          <Text style={{color: 'white'}}>Select Contacts</Text>
          <Text style={{color: 'white'}}>23 Contacts</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <TouchableOpacity>
          <VectorIcon
            name="search"
            type="Feather"
            size={22}
            color={Colors.white}
          />
        </TouchableOpacity>
        <VectorIcon
          name="dots-three-vertical"
          type="Entypo"
          size={22}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

export default ContactsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
