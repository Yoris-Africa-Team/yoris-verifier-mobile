import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  //navigation
  const navigation = useNavigation();

  const OpenDrawer = () => {
    navigation.openDrawer();
  };
  const CloseDrawer = () => {
    navigation.closeDrawer();
  };
  //log out
  const LogOut = async () => {};

  //return
  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: "white", height: "100%" }}
      ></SafeAreaView>
    </>
  );
}
