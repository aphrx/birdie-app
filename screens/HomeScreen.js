import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRecoilState } from 'recoil';
import { homeFeedState } from "../api/atoms";
import Tweet from "../components/Tweet";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { fetchTimeline } from "../api/fetch";

const HomeScreen = ({ navigation }) => {

  const [homeFeed, setHomeFeed] = useRecoilState(homeFeedState);

  useEffect(async () => {
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
        homeFeed.map((tweet) => (
          <TouchableOpacity onPress={() => navigation.navigate('Toot', {toot: tweet})}>
            <Tweet data={tweet} />
            </TouchableOpacity>
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
