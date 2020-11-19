import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    // marginVertical: 5,
  },
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});

export default styles;
