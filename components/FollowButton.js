import { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import { userFollowState } from "../api/atoms";
import { fetchFollowStatus } from "../api/fetch";
import { setFollow, setUnfollow } from "../api/set";

export const FollowButton = ({ user_id }) => {
  const [relationship, setRelationship] = useState(0);

  useEffect(async () => {
    async function fetchData() {
      const res = await fetchFollowStatus(user_id);
      setRelationship(res[0]);
      console.log(res);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.followContainer}>
      {relationship.following ? 
       <TouchableOpacity style={styles.followingButton} onPress={() => setUnfollow(user_id)}>
       <Text style={styles.followingText}>Following</Text>
     </TouchableOpacity>
       : 
        <TouchableOpacity style={styles.followButton} onPress={() => setFollow(user_id)}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      }
    </View>
  );
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
  followingButton: {
    backgroundColor: "white",
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1, 
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  followText: {
    color: "white",
  },
  followingText: {
    color: "black",
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
  },
});
