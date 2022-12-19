import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { fetchHashtagTimeline } from "../api/fetch";
import Toot from "../components/Toot";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export const TimelineScreen = ({ route, navigation }) => {

  const { tag } = route.params;
  const [toots, setToots] = useState([]);

  useEffect(() => {
    async function fetchData(tag) {
      setToots(await fetchHashtagTimeline(tag));
    }

    fetchData(tag);
}, []);

  return (

    <View style={styles.container}>

    <ScrollView>
      {toots.map((toot) => (
        <Toot data={toot} />
      ))}
    </ScrollView></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});