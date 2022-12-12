import { TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { setFavourite, setReblog, setUnfavourite, setUnreblog } from "../api/set";

export default TootIcon = (props) => {
  return (
    <>
      <MaterialCommunityIcons name={props.icon} size={18} color={props.colour?props.colour:"gray"} />
      <Text style={{ marginLeft: 5, color: props.colour?props.colour:"gray" }}>{props.value}</Text>
    </>
  );
};

export const FavouriteIcon = (props) => {
  return (
    <>
      {props.value.favourited ? (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setUnfavourite(props.value.id)}
        >
          <TootIcon
            icon={"heart"}
            colour={"red"}
            value={props.value.favourites_count}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setFavourite(props.value.id)}
        >
          <TootIcon
            icon={"heart-outline"}
            value={props.value.favourites_count}
          />
        </TouchableOpacity>
      )}
    </>
  );
};


export const ReblogIcon = (props) => {
  return (
    <>
      {props.value.reblogged ? (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setUnreblog(props.value.id)}
        >
          <TootIcon
            icon={"repeat-variant"}
            colour={"#19cf86"}
            value={props.value.reblogs_count}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setReblog(props.value.id)}
        >
          <TootIcon
            icon={"repeat-variant"}
            value={props.value.reblogs_count}
          />
        </TouchableOpacity>
      )}
    </>
  );
};
