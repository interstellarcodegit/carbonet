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

export const ScreenController = (props, { navigation }) => {
  if (props.screen == "lessons") {
    return <LessonsScreen />;
  }
  if (props.screen == "enroll") {
    return <EnrollScreen />;
  }
  if (props.screen == "home") {
    return <HomeScreen />;
  }
  if (props.screen == "radio") {
    return <Text>Radio</Text>;
  }
  if (props.screen == "teachings") {
    return <LessonsScreen />;
  }
};

export const Card = (props, { navigation }) => {
  return (
    <View style={styles.lsmainView}>
      <View style={styles.titleView}>
        <IconSelector
          family={props.iconfamily}
          color={props.iconColor}
          name={props.iconName}
        />
        <Text style={styles.lsviewTitle}>{props.name} </Text>
      </View>
      <View style={styles.rowViewb2n}>
        <Text style={styles.showTxt}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis id unde
          quaerat distinctio quidem natus, molestiae fuga praesentium tempore
          est, quibusdam iste dolore doloribus porro quia autem ut voluptatem?
          Aliquam.
        </Text>
        <Image
          style={styles.rowViewImage}
          source={{
            uri: props.uri,
          }}
        />
      </View>
      <View style={styles.enrollButtonCont}>
        <Text
          style={styles.enrollButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Enroll
        </Text>
      </View>
    </View>
  );
};
