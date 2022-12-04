import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { userState } from "../api/atoms";
import { fetchProfile } from "../api/fetch";
import { useEffect } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Avatar from "../components/Avatar";
import dateFormat from "dateformat";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(async () => {
    async function fetchData() {
      const res = await fetchProfile();
      setUser(res);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="light"/> */}

      <ScrollView>
        <View>
          <Header
            src={
              "https://www.rpnation.com/gallery/twitter-header-new-york-002.30338/full"
            }
          />
          <Avatar style={styles.profile} src={user.avatar_static} />
          <View style={styles.metaHeader}>
            <Text style={styles.displayName}>{user.display_name}</Text>
            <View style={styles.subHeader}>
              <Text style={styles.username}>{"@" + user.acct}</Text>
              <View style={styles.date}>
                <FontAwesome5
                  name="calendar"
                  color="darkgray"
                  style={styles.calIcon}
                />
                <Text style={styles.username}>
                  {"Joined " + dateFormat(user.created_at, "longDate")}
                </Text>
              </View>
            </View>
            <View style={styles.followMetaHeader}>
              <View style={styles.userStats}>
                <View style={styles.followHeader}>
                  <Text style={styles.followValue}>{user.following_count}</Text>
                  <Text style={styles.followTitle}>{"Following"}</Text>
                </View>
              </View>
              <View style={styles.userStats}>
                <View style={styles.followHeader}>
                  <Text style={styles.followValue}>{user.followers_count}</Text>
                  <Text style={styles.followTitle}>{"Followers"}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  calIcon: {
    padding: 2,
  },
  subHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 25,
  },
  metaHeader: {
    marginTop: 45,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "HelveticaNeue",
  },
  profile: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 5,
    position: "absolute",
    margin: 20,
    transform: [
      {
        translateY: 80,
      },
    ],
  },
  username: {
    color: "darkgray",
  },
  date: {
    flexDirection: "row",
  },
  followValue: {
    fontWeight: "bold",
    marginRight: 3,
  },
  followHeader: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "HelveticaNeue",
    color: "darkgray",
    marginRight: 10
  },
  followTitle: {
    color: "darkgray",
  },
  followMetaHeader:{
    flexDirection: "row",
    
  }
});

export default ProfileScreen;
