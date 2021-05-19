import { activeScreenin } from "./bottom";
import { HomeScreen } from "./HomeScreen";
import { StatusScreen } from "./StatusScreen";
import { UpdatesScreen } from "./updates";
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
  TouchableOpacity,
  FlatList,
  Text,
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
import { TopBar } from "./TopBar";
import { BottomNavigator } from "./bottom";
export function Watcher(props) {
  while (props.activeScreen == "Home") {
    return <HomeScreen />;
  }
  while (props.activeScreen == "Status") {
    return <StatusScreen />;
  }

  while (props.activeScreen == "Updates") {
    return <UpdatesScreen />;
  }
}
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
