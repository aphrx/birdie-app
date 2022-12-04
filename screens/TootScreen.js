import { Text, View, StyleSheet } from "react-native";
import Toot from "../components/Toot";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { fetchTimeline } from "../api/fetch";

const TootScreen = ({ route, navigation }) => {

  const { toot } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {console.log(toot)}
        <Toot data={toot} />
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
