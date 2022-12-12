import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Avatar = ({ user, style, isProfile }) => {
  const navigation = useNavigation();

  return isProfile ? <Image style={style} source={{ uri: user.avatar_static }} />
: 
      <TouchableOpacity
        onPress={() => navigation.navigate("UserProfile", { userObj: user, isExternal: 1 })}
      >
        <Image style={style} source={{ uri: user.avatar_static }} />
      </TouchableOpacity>
};
