import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Notification from "../components/Notification";
import { fetchNotifications } from "../api/fetch";
import { useRecoilState } from "recoil";
import { notificationState } from "../api/atoms";
import { useEffect } from "react";

const NotificationScreen = ({ navigation }) => {

  const [notifications, setNotifications] = useRecoilState(notificationState);

  useEffect(async () => {
    async function fetchData() {
    const res = await fetchNotifications()
    setNotifications(res)
    }
    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
        notifications.map((notification) => 
            <Notification data={notification} />
          )
        }
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
