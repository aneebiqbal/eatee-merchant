import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ApplicationStyles, Images } from "../../theme";
import { Icon } from "react-native-elements";
import SearchField from "./SearchField";
import ButtonIconOrText from "./ButtonIconOrText";
import { useDispatch, useSelector } from "react-redux";
import InventoryItemsCard from "./InventoryItemCard";
import Status from "../../constants/status";
import Spinner from "./Spinner";
import PaginatedList from "./PaginatedList";
import { getItemResetStates, getItems } from "../../actions/GetItemAction";
import InventoryItemCard from "./InventoryItemCard";
import { HP } from "../../utils";

const InventoryMenu = ({ navigation }) => {
  const dispatch = useDispatch();

  const { items, itemsStatus } = useSelector(
    ({ GetItemState }) => GetItemState
  );
  console.log(items, itemsStatus);

  const { user } = useSelector(({ AccountState }) => AccountState);

  useEffect(() => {
    dispatch(getItems(user.accessToken, user.merchantId));
    return () => dispatch(getItemResetStates());
  }, [user.accessToken, user.merchantId, dispatch]);
  debugger;
  const renderOrderItem = ({ item }) => {
    console.log(item);

    return <InventoryItemCard object={item} navigation={navigation} />;
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#DDDDDD", flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SearchField
          placeholder={"Search"}
          style={{
            margin: 20,
            width: "30%",
            height: 48,
            borderRadius: 48,
          }}
          onChange={() => console.log("test")}
        />
        <ButtonIconOrText
          label={"Craete New"}
          style={{
            height: 55,
            marginTop: 15,
            marginRight: 35,
            borderRadius: 6,
          }}
          iconDirection="right"
          iconName={"plus"}
          iconType={"Entypo"}
          onPress={() => navigation.navigate("CreateNewMenuScreen")}
        />
      </View>
      {itemsStatus === Status.LOADING && !items.length ? (
        <Spinner />
      ) : (
        <PaginatedList
          data={items}
          renderer={renderOrderItem}
          loading={itemsStatus === Status.LOADING}
        />
      )}
    </SafeAreaView>
  );
};

export default InventoryMenu;
