import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: user.imageUri }}
          style={{
            width: 60,
            height: 60,
            marginRight: 15,
            borderRadius: 50,
          }}
        />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.lastMessage}
          >
            {chatRoom.lastMessage.content}skdjfcksdjcksdhjv
          </Text>
        </View>
      </View>
      {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
      <Text style={styles.time}>Yesterday</Text>
    </View>
  );
};

export default ChatListItem;