import {View, StyleSheet, Modal, Image, Text} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from './VectorIcon';
import ProgressBar from './ProgressBar';

const FullModal = props => {
  const {showModal, setShowModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setShowModal(prev => ({...prev, [item.id]: false}));
  };

  return (
    <Modal
      animationType="fade"
      visible={showModal}
      onRequestClose={updateModalStatus}>
      <View style={styles.container}>
        <ProgressBar setTimeUp={setTimeUp} />
        <View style={styles.topContainer}>
          <View style={styles.profileSection}>
            <VectorIcon
              name="arrow-back"
              type="Ionicons"
              size={24}
              color={Colors.white}
              onPress={() =>
                setShowModal(prev => ({...prev, [item.id]: false}))
              }
            />
            <Image
              source={require('../assets/status1.jpeg')}
              style={styles.profileImg}
            />
            <Text style={styles.username}>Mehru</Text>
          </View>
          <VectorIcon
            type="Entypo"
            name="dots-three-vertical"
            color={Colors.white}
            size={18}
          />
        </View>
        <Image
          source={require('../assets/status1.jpeg')}
          style={styles.storyImg}
        />
        <Text style={styles.storyMsg}>🍁🥀🙃</Text>
        <View style={styles.replySection}>
          <VectorIcon
            type="Entypo"
            name="chevron-small-up"
            color={Colors.white}
            size={24}
            // onPress={() =>
            //   setShowStatusModal(prev => ({...prev, [item.id]: false}))
            // }
          />
          <Text style={styles.reply}>Reply</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  storyImg: {
    height: '75%',
    width: '100%',
  },
  storyMsg: {
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
  },
  container: {
    backgroundColor: Colors.primaryColor,
    height: '100%',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 12,
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reply: {
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  replySection: {
    alignItems: 'center',
  },
});

export default FullModal;
