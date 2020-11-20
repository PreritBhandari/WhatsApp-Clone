import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";

import {
  MaterialCommunityIcons,
  Octicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, Image } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },

        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 90,
                justifyContent: "space-around",
              }}
            >
              <Octicons name="search" size={22} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={26}
                color="white"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            marginBottom: 13,
            marginLeft: 7,
          },
          headerLeft: () => (
            <View style={{ flexDirection: "row" }}>
              <Octicons
                style={{ padding: 10 }}
                name="chevron-left"
                size={27}
                color="white"
                onPress={() => console.log("back")}
              />

              <Image
                source={{ uri: route.params.image }}
                style={{
                  width: 38,
                  height: 38,
                  marginLeft: 2,
                  borderRadius: 20,
                }}
              />
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 120,
                justifyContent: "space-between",
              }}
            >
              <FontAwesome5 name="video" size={22} color="white" />
              <MaterialIcons name="call" size={22} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color="white"
              />
            </View>
          ),
        })}
      />

      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
