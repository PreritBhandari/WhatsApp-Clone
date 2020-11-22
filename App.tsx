import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { getUser } from "./graphql/queries";
import { createUser } from "./graphql/mutations";

//aws settings
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const randomImages = [
  "https://i.pinimg.com/564x/b2/8c/58/b28c582e4dfa5c7c97a285487a7a0be5.jpg",
  "https://i.pinimg.com/564x/bc/7d/1b/bc7d1b65ae591d4401897967660471d8.jpg",
  "https://i.pinimg.com/564x/68/a6/7c/68a67c62366eaff0fa686f81d18ed4ea.jpg",
  "https://i.pinimg.com/564x/fe/be/51/febe51b07c1975cb98cb82091c2d1f80.jpg",
];

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

  useEffect(() => {
    const fetchUser = async () => {
      // get Authenticated User from the Auth

      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (userInfo) {
        // get the user from backend with user SUB from Auth
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        if (userData.data.getUser) {
          console.log("User is already registered");
          return;
        }

        //if no user in db with id then create new

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: "Hey, I am at WhatsApp ",
        };

        console.log(newUser);

        await API.graphql(graphqlOperation(createUser, { input: newUser }));
      }
    };
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
