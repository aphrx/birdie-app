import { View, Image, StyleSheet } from "react-native";

export default Header = (props) => {
  return (
    <View>
      <Image style={styles.header} source={{uri: props.src}} resizeMode='stretch'
/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height:130
  },
  container: {
    backgroundColor: "blue"
  }
});
