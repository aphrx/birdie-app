import { Image } from "react-native";
import { Linking } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import "react-native-url-polyfill/auto";

export default LinkCard = ({ link }) => {
  const url = new URL(link.url);
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link.url)}>
    <View style={styles.container}>
      {link.image?<Image style={styles.image} source={{ uri: link.image }} resizeMode="cover"/>:<></>}
      <View style={styles.contentContainer}>
        <Text style={styles.hostname}>{url.hostname.replace("www.", "")}</Text>
      <Text style={styles.title}>{link.title}</Text>
      </View>
      
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginTop: 10
  },
  contentContainer: {
    padding: 10,
  },
  hostname: {
    color: "grey",
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    height: 165,
}    
});
