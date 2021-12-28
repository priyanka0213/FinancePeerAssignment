import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
let beach = require("../assets/images/beach.jpeg");
let climbingHills = require("../assets/images/climbing_hills.jpg");
let frozenHills = require("../assets/images/frozen_hills.jpg");
let homeBanner = require("../assets/images/home_banner.jpg");
let onboardingImage = require("../assets/images/onboarding_image.jpg");
let skiVilla = require("../assets/images/ski_villa.jpg");
let skiVillaBanner = require("../assets/images/ski_villa_banner.jpg");

const Home = (props) => {
  console.log(props, "homeee", props.route.params);
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: "Ski Villa",
      img: skiVilla,
    },
    {
      id: 1,
      name: "Climbing Hills",
      img: climbingHills,
    },
    {
      id: 2,
      name: "Frozen Hills",
      img: frozenHills,
    },
    {
      id: 3,
      name: "Beach",
      img: beach,
    },
  ]);
  function renderDestinations(item, index) {
    var destinationStyle = {};

    if (index == 0) {
      destinationStyle = { marginLeft: 24 };
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginHorizontal: 8,
          ...destinationStyle,
        }}
        onPress={() => {}}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: width * 0.28,
            height: "42%",
            borderRadius: 15,
          }}
        />

        <Text style={{ marginTop: 8 / 2, fontSize: 16, fontWeight: "600" }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {props.route.params ? (
        <Image
          style={{ width: "100%", height: Dimensions.get("screen").height }}
          source={{ uri: props.route.params.params.uri }}
        />
      ) : (
        <>
          <ImageBackground
            source={beach}
            resizeMode="cover"
            style={{ position: "absolute", height: "100%", width: "100%" }}
          ></ImageBackground>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={destinations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderDestinations(item, index)}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate("camerascreen")}
            style={{
              paddingVertical: 10,
              borderRadius: 8,
              backgroundColor: "#5352ed",
              marginTop: 10,
              height: 50,
              width: "90%",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 18 }}>
              Click Photos
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Home;
