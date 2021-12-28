import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Data } from "../data";
import AsyncStorage from "@react-native-community/async-storage";
const STORAGE_KEY = "@save_data";
const UpdateProfile = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    saveData();
  }, []);
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, data);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem(STORAGE_KEY);

      if (data.length !== null) {
        setData(data);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  console.log(props, "eeeeeeeeeeeeeeeeeeeee", Data.length);
  const renderDisplay = (item) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={readData()} style={{}}>
        <Text>Clear Storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfile;

// import { View, Text, Image, FlatList } from "react-native";
// import { Data } from "../data";
// const Profile = (props) => {
//   console.log(props, "eeeeeeeeeeeeeeeeeeeee", Data.length);
//   const renderDisplay = (item) => {
//     return <Text>{item.title}</Text>;
//   };
//   return (
//     <View>
//       <Text>Profile</Text>
//       <FlatList
//         data={Data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item, index }) => renderDisplay(item)}
//       />
//     </View>
//   );
// };

// export default Profile;
