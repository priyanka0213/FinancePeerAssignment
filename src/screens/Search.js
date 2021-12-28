import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const Search = () => {
  let [lat, setLat] = useState(0);
  let [long, setLong] = useState(0);
  let [address, setAddress] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition((data) => setLat(data.coords.latitude));
    Geolocation.getCurrentPosition((data) => setLong(data.coords.longitude));
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        lat +
        "," +
        long +
        "&key=" +
        "AIzaSyA-0YeMa0kreIdwbO2Rj2G2eiAq-U7WQkU"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson.results)
        );
        setAddress(responseJson.results);
        //  console.log(b, "hahhaha");
        // setAddress(responseJson);
      });
  }, []);
  console.log(address, "hiiiiiiiiiiiiiiiiiiii");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 16, alignSelf: "center" }}>
        latitude-{lat} {"\n"} longitude-{long}
        {"\n"}
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Your Location is -{"\n"}
          {address.length !== 0 ? address[0].formatted_address : null}
        </Text>
      </Text>
    </View>
  );
};

export default Search;
