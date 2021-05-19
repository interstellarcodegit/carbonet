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
export const TopBar = () => {
  return (
    <Text>TopBar</Text>
    // <View style={styles.textView}>
    //   <Image
    //     style={styles.headerImage}
    //     source={require("./assets/splash.png")}
    //   />
    //   <Text style={styles.mainTxt}>Repent & Prepare The Way</Text>
    // </View>
  );
};
export function LogoTitle() {
  return (
    <View style={styles.rowViewb2n}>
      {/* <Image
        style={{ width: 50, height: 50 }}
        source={require("./assets/splash.png")}
      /> */}
      <Text style={styles.mainTxt}>CarbonConverse</Text>
    </View>
  );
}
