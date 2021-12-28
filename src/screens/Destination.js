import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function Destination() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "blue", textAlign: "center" }}>
            Data from jsonPlaceholder Api
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "blue",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Names
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => <Text>{item.id + ". " + item.name}</Text>}
          />
        </View>
      )}
    </View>
  );
}
