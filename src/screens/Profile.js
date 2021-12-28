import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Data } from "../data";
import AsyncStorage from "@react-native-community/async-storage";
const STORAGE_KEY = "@save_data";
const Profile = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Data));
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };
  const readData = async () => {
    try {
      const userdata = await AsyncStorage.getItem(STORAGE_KEY);
      console.log(JSON.parse(userdata), "hiiiiiiiiiiiiiiiiiiiiiiiiii");
      if (userdata !== null) {
        console.log("saving intooooo");
        console.log(JSON.parse(userdata), "seee");
        setData(JSON.parse(userdata));
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  console.log(props, "eeeeeeeeeeeeeeeeeeeee", data);
  const renderDisplay = (item) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            saveData();
          }}
          style={{
            height: 50,
            width: 200,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white" }}>Store Data</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={{
          height: 50,
          width: 200,
          backgroundColor: "yellow",
          alignItems: "center",
          marginTop: 10,
        }}
        onPress={() => {
          readData();
        }}
      >
        <Text>Read Data</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;
