import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

// import users from "../data/users";
import { FlatList } from "react-native-gesture-handler";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";
export default function ContactsScreen() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));

        setUsers(usersData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
