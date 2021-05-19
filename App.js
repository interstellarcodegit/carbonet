import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { StatusBar } from "expo-status-bar";
import React from "react";
import { styles } from "./styles";
import {
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./login";
import { SignUpScreen } from "./signup";

import { ChatScreen } from "./chat";

import { SettingsScreen } from "./settings";

// import { SignUpScreen } from "./signup";

import { StatusScreen } from "./StatusScreen";
import { LogoTitle } from "./TopBar";
import { BottomNavigator } from "./bottom";
import { Watcher } from "./watcher";
const MyTheme = {
  dark: true,
  colors: {
    primary: "red",
    // background: "blue",
    card: " rgb(17, 4, 26)",
    text: "green",
    border: "red",
    notification: "rgb(255, 69, 58)",
  },
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export var activeScreen;
export let activeScreenin = "Home";
export let HomeActiveColor;
export default function App() {
  var activeColor = "red";
  var activeTxtColor = "white";
  var inactiveTxtColor = "aqua";
  var inactiveColor = "transparent";
  const [active, setActive] = React.useState("Status");
  const [Homeactive, setHomeActive] = React.useState(activeColor);
  const [StatusActive, setStatusActive] = React.useState(inactiveColor);
  const [UpdatesActive, setUpdatesActive] = React.useState(inactiveColor);
  HomeActiveColor = Homeactive;

  console.log("active");
  return (
    <View style={styles.container}>
      <Watcher activeScreen={active} />
      <View style={styles.bottomnav}>
        <TouchableOpacity
          onPress={() => {
            setHomeActive(activeColor);
            setUpdatesActive(inactiveColor);
            setActive("Home");
            setStatusActive(inactiveColor);
          }}
          style={{
            width: windowWidth / 4,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: windowHeight / 13,
            backgroundColor: Homeactive,
          }}
        >
          <Text
            onPress={() => {
              setHomeActive(activeColor);
              setUpdatesActive(inactiveColor);
              setStatusActive(inactiveColor);
              setActive("Home");
            }}
            style={
              (styles.bottomNavText,
              {
                color: active == "Home" ? activeTxtColor : inactiveTxtColor,

                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              })
            }
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatusActive(activeColor);
            setHomeActive(inactiveColor);
            setUpdatesActive(inactiveColor);
            setActive("Status");
            // navigation.navigate("Status");
          }}
          style={
            (styles.bottomNavButton,
            {
              width: windowWidth / 4,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              height: windowHeight / 13,
              backgroundColor: StatusActive,
            })
          }
        >
          <Text
            onPress={() => {
              setStatusActive(activeColor);
              setHomeActive(inactiveColor);
              setUpdatesActive(inactiveColor);
              setActive("Status");
            }}
            style={
              (styles.bottomNavText,
              {
                color: active == "Status" ? activeTxtColor : inactiveTxtColor,

                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              })
            }
          >
            Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUpdatesActive(activeColor);
            setStatusActive(inactiveColor);
            setHomeActive(inactiveColor);
            setActive("Updates");
          }}
          style={
            (styles.bottomNavButton,
            {
              width: windowWidth / 4,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              height: windowHeight / 13,
              backgroundColor: UpdatesActive,
            })
          }
        >
          <Text
            onPress={() => {
              setUpdatesActive(activeColor);
              setStatusActive(inactiveColor);
              setHomeActive(inactiveColor);
              setActive("Updates");
            }}
            style={
              (styles.bottomNavText,
              {
                color: active == "Updates" ? activeTxtColor : inactiveTxtColor,

                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              })
            }
          >
            Updates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
{
  /* <View>


    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          name="Status"
          component={StatusScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          name="Settings"
          component={SettingsScreen}
        />

        <Stack.Screen
          name="Home"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Bottom"
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>

<StatusBar style="auto" />
</View> */
}
