import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

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
export const IconSelector = (props) => {
  if (props.family == "fontawesome") {
    return <FontAwesome name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "ionicons") {
    return <Ionicons name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "MaterialCommunityIcons") {
    return (
      <MaterialCommunityIcons name={props.name} size={24} color={props.color} />
    );
  }
  if (props.family == "fontisto") {
    return <Fontisto name={props.name} size={24} color={props.color} />;
  }
  if (props.family == "entypo") {
    return <Entypo name={props.name} size={24} color={props.color} />;
  }

  if (props.family == "MaterialIcons") {
    return <MaterialIcons name={props.name} size={24} color={props.color} />;
  }
};
