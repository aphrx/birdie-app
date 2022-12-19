import { View, StyleSheet, ScrollView } from "react-native";
import Notification from "../components/Notification";
import { fetchNotifications } from "../api/fetch";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { notificationState } from "../api/atoms";

const NotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useRecoilState(notificationState);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchNotifications();
      setNotifications(res);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {notifications.map((notification) => (
          <Notification data={notification} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default NotificationScreen;
