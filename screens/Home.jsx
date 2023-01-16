import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <ScrollView>
        <Text>Home</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            onPress={() => navigation.navigate("Become A Verifier")}
            title="Go to Verifier"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
