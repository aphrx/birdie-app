import { View, Text, StyleSheet } from "react-native";
import { RichEditor } from "react-native-pell-rich-editor";
import RenderHtml from "react-native-render-html";
import Avatar from "./Avatar";
import dateFormat from "dateformat";
// import image from "../assets/drake.jpg";
import TootIcon from "./TootIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default Toot = (props) => {
  return (
    <>
      <View>
        <View style={styles.container}>
          {console.log("DATTAAA")}
          {console.log(props.data)}
          {props.data.reblog != undefined ? (
            <>
              <View style={styles.notificationHeader}>
                <MaterialCommunityIcons
                  name={"repeat-variant"}
                  color={"darkgray"}
                  size={18}
                  style={styles.notificationIcon}
                />
                <Text style={styles.notificationText}>
                  {props.data.account.display_name} reboosted
                </Text>
              </View>
              <TootBody data={props.data.reblog} />
            </>
          ) : (
            <>
              <TootBody data={props.data} />
            </>
          )}
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
    </>
  );
};

const TootBody = ({ data }) => {
  return (
    <View style={styles.outerContainer}>
      {console.log(data)}
      <Avatar src={data.account.avatar_static} style={styles.avatar} />
      <View style={styles.innerContainer}>
        <User data={data} />
        <InnerTweet data={data} />
      </View>
    </View>
  );
};

export const InnerTweet = ({ data }) => {
  // const tagsStyles = {
  //   a: {
  //     color: 'green',
  //   }
  // };

  return (
    <>
      <View style={styles.contentContainer}>
        <RenderHtml
          source={{
            html:
              "<div style='font-family: HelveticaNeue; font-size: 16px;'>" +
              data.content.replace("<p>", "<span>").replaceAll("</p>", "</span>").replaceAll("<a", "<a style='text-decoration: none'") +
              "</div>",
          }}
          // tagsStyles={tagsStyles}
        />
      </View>

      <View style={styles.iconContainer}>
        <TootIcon icon={"comment-outline"} value={data.replies_count} />
        <TootIcon icon={"repeat-variant"} value={data.reblogs_count} />
        <TootIcon icon={"heart-outline"} value={data.favourites_count} />
        <TootIcon icon={"share-outline"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingHorizontal: 15 },
  name: { fontSize: 16, fontWeight: "500" },
  username: {
    paddingLeft: 5,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    paddingRight: 5,
  },
});
