import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export const FollowButton = () => {
  return (
    <View style={styles.followContainer}>
    <TouchableOpacity style={styles.followButton}>
      <Text style={styles.followText}>Follow</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  followButton: {
    backgroundColor: "black",
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  followText: {
    color: "white",
  },
  followContainer:{
    flex: 1,
    flexDirection: 'row'
    
  }
});
