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
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function VerifierApprove() {
  const navigation = useNavigation();
  const route = useRoute();

  //getters & setters
  const [getImage, setImage] = useState({});
  const [getReview, setReview] = useState("");

  const imcompleteSubmittedValue = !getReview;

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setImage(response);
      }
    });
  };
  //*#################################################################

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: "POST",
      body: createFormData(getImage, { userId: "123" }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //*#################################################################
  //submit
  const Submit = async () => {
    //submit form to api
  };

  //*#################################################################

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

              <View>
                <Text style={styles.text}>Enter Review</Text>

                <TextInput
                  placeholder="Review"
                  keyboardType="default"
                  style={styles.inputbox}
                  value={getReview}
                  onChangeText={(e) => {
                    setReview(e);
                  }}
                />
              </View>

              <View>
                <Text style={styles.text}>Image of Business</Text>

                <View
                  style={{
                    // flex: 4,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getImage && (
                    <>
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
                      <Button
                        title="Upload Image"
                        onPress={handleUploadPhoto}
                      />
                    </>
                  )}
                  <Button title="Choose Image" onPress={handleChoosePhoto} />
                </View>
              </View>

              {/* BUTTONS */}

              <View style={{}}>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <Button
                    title="Approve"
                    onPress={() => Alert.alert("Approved")}
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
    width: 340,
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
