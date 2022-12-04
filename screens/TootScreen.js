import { Text, View, StyleSheet } from "react-native";
import Tweet from "../components/Tweet";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { fetchTimeline } from "../api/fetch";

const TootScreen = ({ route, navigation }) => {

  const { toot } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {console.log(toot)}
        <Tweet data={toot} />
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

export default TootScreen;
