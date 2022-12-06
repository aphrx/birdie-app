import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { userState, userTootState } from "../api/atoms";
import { fetchProfile, fetchToots } from "../api/fetch";
import { useEffect } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Avatar from "../components/Avatar";
import dateFormat from "dateformat";
import RenderHTML from "react-native-render-html";
import Toot from "../components/Toot";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);
  const [toots, setToots] = useRecoilState(userTootState);
  useEffect(async () => {
    async function fetchData() {
      const res = await fetchProfile();
      setUser(res);
      return res.id;
    }

    async function fetchTootData(id) {
      const tootRes = await fetchToots(id);
      console.log(tootRes);
      setToots(tootRes);
    }
    userId = await fetchData();
    fetchTootData(userId);
  }, []);

  return (
    <View style={styles.container}>
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
              <View style={styles.bio}>
                <RenderHTML
                  source={{
                    html:
                      "<div style='font-family: HelveticaNeue; font-size: 16px;'>" +
                      user.note
                        .replace("<p>", "<span>")
                        .replace("</p>", "</span>") +
                      "</div>",
                  }}
                />
              </View>
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
        {toots.map((toot) => (
          
          <Toot data={toot} />
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
  calIcon: {
    padding: 2,
  },
  subHeader: {
    flex: 1,
    flexDirection: "column",
  },
  bio: {
    paddingVertical: 10,
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
    marginRight: 10,
  },
  followTitle: {
    color: "darkgray",
  },
  followMetaHeader: {
    flexDirection: "row",
  },
});

export default ProfileScreen;
