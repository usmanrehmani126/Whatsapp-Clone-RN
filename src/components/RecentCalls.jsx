import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../utlis/VectorIcon';
import {Colors} from '../theme/Colors';
import {RecentCallsData} from '../data/CallsData';
const RecentCalls = () => {
  return (
    <View>
      <Text style={{color: Colors.textColor, marginVertical: 8}}>Recent</Text>
      {RecentCallsData.map(calls => {
        return (
          <View
            key={calls.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Image source={calls.profileImg} style={styles.profilePic} />
              </View>
              <View style={{marginTop: -6, marginLeft: 12}}>
                <Text style={{color: 'white', fontSize: 16}}>{calls.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 8,
                  }}>
                  <VectorIcon
                    name={calls.incoming ? 'arrow-down-left' : 'arrow-up-right'}
                    color={calls.incoming ? Colors.red : Colors.tertiary}
                    type="Feather"
                    size={22}
                    style={styles.iconStyle}
                  />
                  <Text style={{color: Colors.textGrey, fontSize: 12}}>
                    {calls.time}
                  </Text>
                </View>
              </View>
            </View>
            <VectorIcon
              name={calls.video ? 'videocam' : 'call'}
              color={Colors.tertiary}
              type={calls.video ? 'Ionicons' : 'MaterialIcons'}
              size={24}
            />
          </View>
        );
      })}

      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={require('../assets/user1.jpeg')}
              style={styles.profilePic}
            />
          </View>
          <View style={{marginTop: -6, marginLeft: 12}}>
            <Text style={{color: 'white', fontSize: 16}}>Sameer ALI </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 8,
              }}>
              <VectorIcon
                name="arrow-up-right"
                color={Colors.tertiary}
                type="Feather"
                size={22}
                style={styles.iconStyle}
              />
              <Text style={{color: Colors.textGrey, fontSize: 12}}>
                Yesterday, 6:32 PM
              </Text>
            </View>
          </View>
        </View>
        <VectorIcon
          name="videocam"
          color={Colors.tertiary}
          type="Ionicons"
          size={26}
        />
      </View> */}
    </View>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 6,
    marginTop: 4,
    marginTop: -2,
  },
});
