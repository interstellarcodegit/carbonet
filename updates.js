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
export let HomeActiveColor;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
var activeScreen = "Home";
export const UpdatesScreen = ({ navigation }) => {
  var activeColor = "red";
  var activeTxtColor = "white";
  var inactiveTxtColor = "aqua";
  var inactiveColor = "transparent";
  const [active, setActive] = React.useState("Home");
  const [Homeactive, setHomeActive] = React.useState(activeColor);
  const [StatusActive, setStatusActive] = React.useState(inactiveColor);
  const [UpdatesActive, setUpdatesActive] = React.useState(inactiveColor);
  HomeActiveColor = Homeactive;
  return (
    <ImageBackground
      style={styles.bgImage}
      source={{
        uri:
          "https://fsa.zobj.net/crop.php?r=gl9ZYiewH3Loi5RJgab-fgAxPUPO2KSSk2glWOyi5kPVTj4D2FCwFBowFTrStikdGo1cIDRZp_DZzKC4czQ1WufxLRc4eHnxyzJEtcljy3d7jHm7cH7R3FEvmUUN-BBo5Jaw37iJlhvfIqNJ",
      }}
    >
      <View style={styles.container}>
        <TopBar />
        <Text style={styles.mainTxt}>Updates</Text>
      </View>
    </ImageBackground>
  );
};
