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
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function Verifier() {
  const navigation = useNavigation();
  const route = useRoute();
  const accepted = false;
  const [getImage, setImage] = useState({});
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <ScrollView>
        {/* <View className="ml-3 mt-4">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          ></TouchableOpacity>
        </View> */}
        <View
          className="m-2"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 2,
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <View>
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

              <Text style={styles.text}>Business Name</Text>

              <Text style={styles.text1}>
                Business Description hwj9jwiwdjwidjqwidj uiqwhdu9qwhf9qwuhf
                wfqu9wfh89qfh89hwq dvfatfdyasu
              </Text>

              <Text style={styles.text}>Address</Text>
              <Text style={styles.text1}>Address Ikeja Lagos Nigeria</Text>

              <View>
                <Image
                  source={{ uri: getImage.uri }}
                  style={{
                    width: 340,
                    height: 130,
                    backgroundColor: "white",
                    borderRadius: 5,
                    marginTop: 10,
                  }}
                />
              </View>

              <Text style={styles.text}>Phone Number</Text>
              <Text style={styles.text1}>08123343534</Text>

              <Text style={styles.text}>Verifier Fee</Text>
              <Text style={styles.text1}>#10,000</Text>

              {/* BUTTONS */}

              <View style={styles.fixToText}>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Button
                    title="Decline"
                    onPress={() => Alert.alert("Declined")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Button
                    title="Accept"
                    onPress={() => Alert.alert("Accepted")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#767676",
    marginTop: 20,
  },
  text: {
    color: "white",
    marginTop: 15,
    fontSize: 20,
  },
  inputbox: {
    borderRadius: 10,
    marginTop: 7,
    marginBottom: 7,
    height: 40,
    width: 320,
    backgroundColor: "#fff",
    padding: 7,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
