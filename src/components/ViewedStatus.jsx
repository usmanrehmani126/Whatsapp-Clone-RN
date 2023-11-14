import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import {ViewedStatusData} from '../data/ViewedStatus';
const ViewedStatus = () => {
  return (
    <View>
      <Text style={{marginVertical: 6}}>Recent Updates</Text>

      {ViewedStatusData.map((status, index) => {
        return (
          <TouchableOpacity style={styles.subcontainer} key={index}>
            <View style={styles.statusImageParent}>
              <Image source={status.storyImg} style={styles.statusImage} />
            </View>
            <View>
              <Text style={styles.userName}>{status.name}</Text>
              <Text>{status.time}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ViewedStatus;

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 5,
  },
  statusImageParent: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.textGrey,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  statusImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  userName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  border: {
    width: '80%',
    height: 1,
    borderColor: 'white',
    borderWidth: 0.5,
    alignSelf: 'center',
  },
  time: {
    fontSize: 12,
    marginTop: 6,
  },
});
