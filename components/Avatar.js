import { View, Image, StyleSheet } from "react-native";

export default Avatar = (props) => {
  return (
    <View>
      <Image style={styles.avatar} source={{uri: props.src}} width={props.size}/>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
});
