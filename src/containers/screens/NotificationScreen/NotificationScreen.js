import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentDivider, Header } from "../../../components/common";
import {
  GetNotifications,
  notificationfailure,
} from "../../../actions/NotificationActions";
import { NotificationCard } from "../../../components/common/NotificationCard";

const NotificationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { notifications } = useSelector(
    ({ NotificationState }) => NotificationState
  );
  console.log('Notification',notifications);
  const {
    user: { accessToken },
  } = useSelector(({ AccountState }) => AccountState);

  useEffect(() => {
    dispatch(GetNotifications(accessToken));
    return () => dispatch(notificationfailure());
  }, [accessToken, dispatch]);

  useEffect(() => {}, [notifications]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header user left navigation={navigation} />
      <ContentDivider />
      {notifications?.length > 0 && (
        <FlatList
          data={notifications}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          style={{ margin: 20 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OrderHistoryScreen", {
                  order: item.result.order,
                })
              }
            >
              <NotificationCard notification={item} />
              <ContentDivider />
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default NotificationScreen;
