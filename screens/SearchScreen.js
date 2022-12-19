import { Text, View, StyleSheet, ScrollView } from "react-native";
import { trendState } from "../api/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { fetchTrends } from "../api/fetch";
import Trend from "../components/Trend";
import { TouchableOpacity } from "react-native";

const SearchScreen = ({ navigation }) => {
  const [trends, setTrends] = useRecoilState(trendState);

  useEffect(() => {
    async function fetchData() {
      setTrends(await fetchTrends());
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {trends.map((trend) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Trending", { tag: trend.name })}
          >
            <Trend data={trend} />
          </TouchableOpacity>
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
