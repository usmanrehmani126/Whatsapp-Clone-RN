import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import {RecentStatusData} from '../data/statusData';
import FullModel from '../utlis/FullModel';

const RecentStatus = () => {
  const [showModal, setShowModal] = useState(true);
  const setTimeUp = itemId => {
    setShowModal(pre => ({
      ...pre,
      [itemId]: false,
    }));
  };

  const ViewedStatus = itemId => {
    setShowModal(pre => ({...pre, [itemId]: true}));
  };
  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 12}}>Recent Updates</Text>

      {RecentStatusData.map(item => {
        return (
          <>
            <TouchableOpacity
              style={styles.subcontainer}
              key={item.id}
              onPress={() => ViewedStatus(item.id)}>
              <View style={styles.statusImageParent}>
                <Image source={item.storyImg} style={styles.statusImage} />
              </View>
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text>{item.time}</Text>
              </View>
            </TouchableOpacity>
            <FullModel
              showModal={showModal[item.id] || false}
              setTimeUp={() => setTimeUp(item.id)}
              setShowModal={value =>
                setShowModal(pre => ({...pre, [item.id]: value}))
              }
              item={item}
            />
          </>
        );
      })}
      {/* <View style={styles.border} /> */}
    </View>
  );
};

export default RecentStatus;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
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
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 25,
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
