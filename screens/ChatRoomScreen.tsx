import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessages";

export default function ChatRoomScreen() {
  const route = useRoute();
  return (
    <View>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/79/5c/ab/795cabc4647f73b365e2e6eabd0f34dc.png",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <FlatList
          data={chatRoomData.messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          inverted
        />
      </ImageBackground>
    </View>
  );
}
