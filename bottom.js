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
  View,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
// import { exp } from "react-native/Libraries/Animated/src/Easing";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export var activeScreen;
export let activeScreenin = "Home";
export let HomeActiveColor;
function DetActiveScreen() {}
export const BottomNavigator = () => {
  var activeColor = "red";
  var activeTxtColor = "white";
  var inactiveTxtColor = "aqua";
  var inactiveColor = "transparent";
  const [active, setActive] = React.useState("Status");
  const [Homeactive, setHomeActive] = React.useState(activeColor);
  const [StatusActive, setStatusActive] = React.useState(inactiveColor);
  const [UpdatesActive, setUpdatesActive] = React.useState(inactiveColor);
  HomeActiveColor = Homeactive;
  activeScreenin = active;
  console.log("active");
  return (
    <View style={styles.bottomnav}>
      <TouchableOpacity
        onPress={() => {
          setHomeActive(activeColor);
          setUpdatesActive(inactiveColor);
          setStatusActive(inactiveColor);
          setActive("Home");
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
  );
};

// BottomNavigator();
