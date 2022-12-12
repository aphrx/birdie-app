import { Text, View, StyleSheet, ScrollView } from "react-native";
import { trendState } from "../api/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { fetchTrends } from "../api/fetch";
import Trend from "../components/Trend";

const SearchScreen = ({ navigation }) => {
  const [trends, setTrends] = useRecoilState(trendState);

  useEffect(async () => setTrends(await fetchTrends()), []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {trends.map((trend) => (
          <Trend data={trend} />
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
});

export default SearchScreen;
