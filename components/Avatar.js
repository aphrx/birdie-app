import { View, Image, StyleSheet } from "react-native";

export default Avatar = (props) => {
  return (
      <Image style={props.style} source={{uri: props.src}}/>
  );
};