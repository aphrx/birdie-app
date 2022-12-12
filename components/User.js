import { View, Text, StyleSheet } from "react-native";

export default User = (props) => {
  return (
    <View style={styles.headerContainer}>
              <View style={styles.subHeaderContainer}>
                <Text style={styles.name}>
                  {props.data.account.display_name}
                </Text>

                <View style={styles.subMetaHeader}>
                  <Text style={styles.username}>
                    {"@" + props.data.account.username}
                  </Text>
                  <View style={styles.timeDivider} />
                  <Text style={styles.time}>{"1h"}</Text>
                </View>
              </View>
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
  subHeaderContainer: {
    flexDirection: "column",
  },
  subMetaHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeDivider: {
    backgroundColor: "darkgray",
    marginHorizontal: 4,
    width: 1.5,
    height: 1.5,
    borderRadius: 3,
  },
  time: {
    color: "darkgray",
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
    borderRadius: 50
  },
});
