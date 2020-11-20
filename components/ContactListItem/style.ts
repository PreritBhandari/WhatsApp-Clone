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
    width: "70%",
  },

  username: {
    fontSize: 16,
    fontWeight: "bold",
  },

  status: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
