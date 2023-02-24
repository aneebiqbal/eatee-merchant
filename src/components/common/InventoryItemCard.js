import { View, Text, Switch, TouchableOpacity, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { ApplicationStyles, Images } from "../../theme";
import { Icon } from 'react-native-elements'
import InventoryMenu from "./InventoryMenu";

const InventoryItemCard = ({object, index, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  console.log('object', object)
  return (
    
    <View
      style={[
        ApplicationStyles.shadow,
        {
          backgroundColor: "white",
          marginHorizontal: 25,
          padding: 35,
          borderRadius: 6,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={
            object.imageUrl !== null &&
            object.imageUrl !== undefined &&
            object.imageUrl !== ''
              ? {uri: object.imageUrl}
              : require('../../assets/images/burger.png')
          }
          style={{
            height: 40,
            width: 40,
          }}
        />
        <View style={{ flexDirection: "column", paddingLeft: 10 }}>
          <Text
            style={{
              width: 160,
              color: "#F33810",
              fontWeight: "700",
              fontSize: 14,
            }}
          >
            {object.name}
          </Text>
          <Text>{object.itemDetails.length > 0 ? object.itemDetails[0].description : ''}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={{ width: 110, fontWeight: "600", fontSize: 14 }}>
          Cheese
        </Text>
        <Text>Category name</Text>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={{ width: 160, fontWeight: "600", fontSize: 14 }}>
          Cheese
        </Text>
        <Text>Price</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          alignItems: "center",
        }}
      >
        <View style={{ right: 40 }}>
          <Switch
            trackColor={{ false: "white", true: "#F33810" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity style={{ right: 20 }} onPress={() => navigation.navigate('CreateNewMenuScreen')} result={object}>
          <Icon name="pencil" type="font-awesome" size={25} color="#0EBE7E" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" type="material" size={25} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InventoryItemCard;
