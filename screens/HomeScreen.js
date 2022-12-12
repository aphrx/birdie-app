import { View, StyleSheet } from "react-native";
import { useRecoilState } from 'recoil';
import { homeFeedState } from "../api/atoms";
import Toot from "../components/Toot";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { fetchTimeline } from "../api/fetch";

const HomeScreen = ({ navigation }) => {

  const [homeFeed, setHomeFeed] = useRecoilState(homeFeedState);

  useEffect(() => {
    async function fetchData() {
    const res = await fetchTimeline()
    setHomeFeed(res)
    }
    fetchData();
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {
        homeFeed.map((toot) => (
            <Toot data={toot} />
          ))
        }
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

export default HomeScreen;
