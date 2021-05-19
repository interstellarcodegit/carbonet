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
export const SignUpScreen = () => {
  const [fname, setFname] = React.useState("");
  const [sname, setSname] = React.useState("");
  return (
    <View>
      <TopBar />
      <Text>Hello Welcome</Text>
      <BottomNavigator />
    </View>
    //     <ImageBackground
    //       style={styles.bgImage}
    //       source={require("./assets/worship.jpg")}
    //     >
    //       <View style={styles.container}>
    //         <View style={styles.rowViewb2n}>
    //           <Text style={styles.submainTxt}>Enroll</Text>
    //           <FontAwesome name="music" size={24} color="white" />
    //           <IconSelector family="fontawesome" name="music" />
    //         </View>

    //         <TextInput
    //           style={styles.nativeInput}
    //           onChangeText={(text) => setFname(text)}
    //           placeholder="Your first name"
    //           placeholderTextColor="gray"
    //         />
    //         <TextInput
    //           style={styles.nativeInput}
    //           onChangeText={(text) => setSname(text)}
    //           placeholder="Your second name"
    //           placeholderTextColor="gray"
    //         />
    //         <View style={styles.submitButtonCont}>
    //           <Text style={styles.submitButton}>Submit </Text>
    //         </View>
    //       </View>
    //     </ImageBackground>
  );
};
