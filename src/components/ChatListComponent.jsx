import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import React from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utlis/VectorIcon';
import { ChatListData } from '../data/ChatListData';
import { useNavigation } from '@react-navigation/native';

const ChatListComponent = () => {
    const navigation = useNavigation()
    return (
        <>
            {ChatListData.map((chat, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("ChatScreen",{
                        ...chat
                    })}>
                        <View style={styles.container}>
                            <View style={styles.chatContainer}>
                                <Image source={chat.profile} style={styles.profileImage} />
                                <View style={styles}>
                                    <Text style={styles.username}>{chat.name}</Text>
                                    <Text style={styles.message}>{chat.message}</Text>
                                </View>
                            </View>
                            <Text style={styles.timeStamp}>{chat.time}</Text>
                        </View>
                        <TouchableOpacity style={styles.icon}>
                            <VectorIcon
                                name={chat.mute ? 'volume-variant-off' : 'volume-medium'}
                                type="MaterialCommunityIcons"
                                size={24}
                                color={Colors.secondaryColor}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                );
            })}
        </>
    );
};

export default ChatListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImage: {
        borderRadius: 50,
        height: 40,
        width: 40,
        marginRight: 15,
    },
    username: {
        color: Colors.textColor,
        fontSize: 16,
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },

    timeStamp: {
        color: Colors.textGrey,
        fontSize: 12,
    },
    chatContainer: {
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 25,
    },
});
