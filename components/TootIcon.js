import { TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const finalText = 0;

export default TootIcon = (props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={props.icon} size={18} color={"gray"} />
      <Text style={{ marginLeft: 5, color: "gray" }}>{props.value}</Text>
    </TouchableOpacity>
  );
};
