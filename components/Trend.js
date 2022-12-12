import { View, Text, StyleSheet } from "react-native";

export default Trend = (props) => {
  const sum = props.data.history.reduce((accumulator, object) => {
    return accumulator + parseInt(object.uses);
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.trendingTitle}>Trending</Text>
      <Text style={styles.trendingTag}>{props.data.name}</Text>
      <Text style={styles.tootsText}>{sum + " Toots"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingHorizontal: 15 },
  trendingTitle: {
    color: "darkgray",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "HelveticaNeue",
    paddingVertical: 5
  },
  trendingTag: {
    color: "black",
    fontSize: 14,
    fontFamily: "HelveticaNeue",
    fontWeight: "700"
  },
  tootsText: {
    color: "darkgray",
    fontSize: 12,
    fontWeight: "300",
    paddingVertical: 5,
    fontFamily: "HelveticaNeue",
  },
});
