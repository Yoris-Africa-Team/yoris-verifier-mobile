import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function VerifierDetails() {
  const navigation = useNavigation();
  const [getImage, setImage] = useState({});
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Verifier")}>
          {/* <View className="ml-3 mt-4">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          ></TouchableOpacity>
        </View> */}
          <View
            style={{
              marginTop: 10,
              marginBottom: 2,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <TouchableOpacity>
              <View style={styles.fixToText}>
                <View>
                  <Image
                    source={{ uri: getImage.uri }}
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "white",
                      borderRadius: 5,
                    }}
                  />
                </View>

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.text}>Business Name</Text>

                  <Text style={styles.text}>Business Description</Text>

                  <Text>Pending</Text>
                  <View style={styles.fixToText2}>
                    <Text style={styles.text}>#1,800</Text>

                    <Text style={styles.text}>0.7km</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
    color: "white",
    marginTop: 3,
  },
  text1: {
    color: "#767676",
    marginTop: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  fixToText2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
