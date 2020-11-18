import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },

  midContainer: {
    justifyContent: "space-around",
    width: "65%",
  },

  username: {
    fontSize: 16,
    fontWeight: "bold",
  },

  lastMessage: {
    fontSize: 16,
    color: "grey",
  },

  time: {
    fontSize: 16,
    color: "grey",
    position: "absolute",
    marginLeft: 280,
    padding: 10,
  },
});

export default styles;
