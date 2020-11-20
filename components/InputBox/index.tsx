import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function InputBox() {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.warn(`Microphone`);
  };
  const onSendPress = () => {
    console.warn(`Sending:${message}`);

    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5
          style={styles.icons}
          name="laugh-beam"
          size={24}
          color="grey"
        />
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo style={styles.icons} name="attachment" size={24} color="grey" />
        {!message && (
          <Fontisto style={styles.icons} name="camera" size={24} color="grey" />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
