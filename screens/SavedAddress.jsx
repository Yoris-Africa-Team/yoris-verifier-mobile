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
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function SavedAddress() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
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
          }}
        >
          <View>
            <Text
              className="text-gray-400 text-xs mt-4"
              style={{
                alignSelf: "center",
              }}
            >
              Esther Howard
            </Text>
          </View>

          <View>
            <Text
              className="text-gray-400 text-xs"
              style={{
                alignSelf: "center",
              }}
            >
              (606)787-1223
            </Text>
          </View>

          <View>
            <Text
              className="text-gray-400 text-xs"
              style={{
                alignSelf: "center",
              }}
            >
              Address uhi9fjwe0pf nuwehfuweifnhoiwejfw
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Button title="Edit" onPress={() => {}} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
