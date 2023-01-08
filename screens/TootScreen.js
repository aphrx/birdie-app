import { View, StyleSheet } from "react-native";
import Toot from "../components/Toot";
import { ScrollView } from "react-native-gesture-handler";

const TootScreen = ({ route, navigation }) => {

  const { toot } = route.params;

  return (
    <View style={styles.container}>
      {console.log("toot", toot.id)}

      <ScrollView>
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
