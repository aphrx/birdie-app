import { View, Image, StyleSheet } from "react-native";

export default Avatar = (props) => {
  return (
    <View>
      <Image style={styles.header} source={{uri: props.src}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
});
