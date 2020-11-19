import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();
  return (
    <View>
      <Text> Chat Room Screen {route.params.id}</Text>
    </View>
  );
}
