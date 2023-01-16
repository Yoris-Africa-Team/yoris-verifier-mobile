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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";

export default function BecomeAVerifier() {
  const navigation = useNavigation();

  //getters & setters
  const [getFullName, setFullName] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getPhoneNumber, setPhoneNumber] = useState("");
  const [getLocation, setLocation] = useState("");
  const [getNIN, setNIN] = useState("");
  const [getImage, setImage] = useState(null);
  const [getBVN, setBVN] = useState("");

  //*#################################################################

  const imcompleteSubmittedValue =
    !getFullName ||
    !getAddress ||
    !getPhoneNumber ||
    !getLocation ||
    !getNIN ||
    !getImage ||
    !getBVN;

  //*#################################################################

  const createFormData = (image, body = {}) => {
    const data = new FormData();

    data.append("image", {
      name: image.fileName,
      type: image.type,
      uri: Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri,
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };
  //*#################################################################

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
        <TouchableWithoutFeedback>
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
              backgroundColor: "black",
            }}
          >
            <View>
              <Text style={styles.text1}>Full Name</Text>

              <TextInput
                placeholder="e.g Shane James"
                keyboardType="default"
                style={styles.inputbox}
                value={getFullName}
                onChangeText={(e) => {
                  setFullName(e);
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>Address</Text>

              <TextInput
                placeholder="e.g No 15 Fair street"
                keyboardType="default"
                style={styles.inputbox}
                value={getAddress}
                onChangeText={(e) => {
                  setAddress(e);
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>Phone Number</Text>

              <TextInput
                placeholder="+23470333355566"
                keyboardType="default"
                style={styles.inputbox}
                value={getPhoneNumber}
                onChangeText={(e) => {
                  setPhoneNumber(e);
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>
                Location(Where you'll be a verifier for)
              </Text>

              <TextInput
                placeholder="Enter Name"
                keyboardType="default"
                style={styles.inputbox}
                value={getLocation}
                onChangeText={(e) => {
                  setLocation(e);
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>NIN</Text>

              <TextInput
                placeholder="*********"
                keyboardType="default"
                // secureTextEntry={true}
                style={styles.inputbox}
                value={getNIN}
                onChangeText={(e) => {
                  setNIN(e);
                }}
              />
            </View>

            <View>
              <Text style={styles.text}>Image of NIN</Text>

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
                        width: 300,
                        height: 200,
                        backgroundColor: "white",
                      }}
                    />
                    <Button title="Upload Image" onPress={handleUploadPhoto} />
                  </>
                )}
                <Button title="Choose Image" onPress={handleChoosePhoto} />
              </View>
            </View>

            <View>
              <Text style={styles.text}>BVN</Text>

              <TextInput
                placeholder="***********"
                keyboardType="default"
                style={styles.inputbox}
                value={getBVN}
                onChangeText={(e) => {
                  setBVN(e);
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Button
                // disabled={imcompleteSubmittedValue}

                title="Done"
                onPress={() => navigation.navigate("Verifier Home")}
              />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
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
    alignSelf: "center",
    color: "white",
    marginTop: 20,
  },
  text: {
    alignSelf: "center",
    color: "white",
    marginTop: 3,
  },
  inputbox: {
    borderRadius: 10,
    marginTop: 7,
    marginBottom: 7,
    height: 40,
    width: 320,
    backgroundColor: "#202121",
    padding: 7,
    color: "white",
  },
});
