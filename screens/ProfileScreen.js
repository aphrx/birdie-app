import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { fetchProfile, fetchToots } from "../api/fetch";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Avatar from "../components/Avatar";
import dateFormat from "dateformat";
import RenderHTML from "react-native-render-html";
import Toot from "../components/Toot";
import { FollowButton } from "../components/FollowButton";

const ProfileScreen = ({ route, navigation }) => {
  const { userObj, isExternal } = route.params;

  const [user, setUser] = useState([]);
  const [toots, setToots] = useState([]);

  useEffect(async () => {
    async function fetchData() {
      const res = await fetchProfile();
      setUser(res);
      return res.id;
    }

    async function fetchTootData(id) {
      setToots(await fetchToots(id));
    }

    if (isExternal) {
      setUser(userObj);
      fetchTootData(userObj.id);
    } else {
      fetchTootData(await fetchData());
    }
  }, []);

  const cleanHTML = (html) => {
    return html !== undefined ? (
      html.replace("<p>", "<span>").replace("</p>", "</span>")
    ) : (
      <></>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            src={
              "https://www.rpnation.com/gallery/twitter-header-new-york-002.30338/full"
            }
          />
          <View style={styles.avatarRow}>
            <Avatar style={styles.profile} user={user} isProfile={1} />
            <FollowButton />
          </View>
          <View style={styles.metaHeader}>
            <Text style={styles.displayName}>{user.display_name}</Text>
            <View style={styles.subHeader}>
              <Text style={styles.username}>{"@" + user.acct}</Text>
              <View style={styles.bio}>
                <RenderHTML
                  source={{
                    html:
                      "<div style='font-family: HelveticaNeue; font-size: 16px;'>" +
                      cleanHTML(user.note) +
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
    margin: 0,
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
  userStats: {
    paddingBottom: 10,
  },
  avatarRow: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    width: "100%",
    transform: [
      {
        translateY: 80,
      },
    ],  
  },
});

export default ProfileScreen;
