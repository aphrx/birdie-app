import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
