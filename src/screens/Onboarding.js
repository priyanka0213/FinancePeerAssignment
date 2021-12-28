import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
const STORAGE_KEY = "@save_data";
const Onboarding = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    readData();
  }, []);
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
  function renderData(item, index) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "blue",
          marginVertical: 15,
        }}
      >
        Data Coming from Local Storage
      </Text>
      {data.length !== 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderData(item, index)}
        />
      ) : null}
    </View>
  );
};

export default Onboarding;
