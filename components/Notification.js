import { View, Text, StyleSheet, ShadowPropTypesIOS } from "react-native";
import Avatar from "./Avatar";
import RenderHtml, { RenderHTML } from "react-native-render-html";
import { FontAwesome5 } from "@expo/vector-icons";
import User from "./User";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InnerTweet } from "./Toot";
import { FollowButton } from "./FollowButton";

export default Notification = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.notificationHeader}>
          <FontAwesome5
            name={"user-plus"}
            color={"darkgray"}
            style={styles.notificationIcon}
          />
          <Text style={styles.notificationText}>
            {props.data.account.display_name} {props.data.type}ed you
          </Text>
        </View>

        <View style={styles.outerContainer}>
          <Avatar
            user={props.data.account}
            style={styles.avatar}
          />
          <View style={styles.innerContainer}>
            <View style={styles.userCard}>
              <User data={props.data} />
              {props.data.type == "follow" ? (
                <FollowButton user_id={props.data.account.id}/>
              ) : (
                <></>
              )}
            </View>
            <View style={styles.contentContainer}>
              {props.data.type == "mention" ? (
                <Mention data={props.data}></Mention>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#f2f2f2",
          borderBottomWidth: 1,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
    </View>
  );
};

const Mention = (data) => {
  console.log(data);
  return <InnerTweet data={data.data.status} />;
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingHorizontal: 15 },
  name: { fontSize: 16, fontWeight: "500" },
  username: {
    color: "darkgray",
  },
  outerContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    marginLeft: 10,
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
  },
  Toot: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "HelveticaNeue",
  },
  TootHTML: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    fontFamily: "HelveticaNeue",
    // backgroundColor: "yellow"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notificationText: {
    color: "darkgray",
    fontFamily: "HelveticaNeue",
  },
  notificationHeader: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10,
    marginLeft: 40,
  },
  notificationIcon: {
    padding: 2,
    paddingRight: 5,
  },
  followButton: {
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  followText: {
    color: "white",
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
  },
});
