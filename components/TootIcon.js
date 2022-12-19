import { View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { setFavourite, setReblog, setUnfavourite, setUnreblog } from "../api/set";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default TootIcon = (props) => {
  return (
    <View style={styles.tootIconContainer}>
      <MaterialCommunityIcons name={props.icon} size={18} color={props.colour?props.colour:"gray"} />
      <Text style={{ marginLeft: 5, color: props.colour?props.colour:"gray" }}>{props.value}</Text>
    </View>
  );
};

export const FavouriteIcon = (props) => {
  const [count, setCount] = useState(props.value.favourites_count);
  const [favourited, setFavourited] = useState(props.value.favourited);

  useEffect(() => {
    async function fetchData() {
      favourited ? setCount(props.value.favourited ? count: count + 1) : setCount(props.value.favourited ?  count - 1: count);
    }
    fetchData();
  }, [favourited]);

  return (
    <>
      {favourited ? (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {setFavourited(false);setUnfavourite(props.value.id);}}
        >
          <TootIcon
            icon={"heart"}
            colour={"red"}
            value={count}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {setFavourited(true);setFavourite(props.value.id);}}
        >
          <TootIcon
            icon={"heart-outline"}
            value={count}
          />
        </TouchableOpacity>
      )}
    </>
  );
};


export const ReblogIcon = (props) => {

  const [count, setCount] = useState(props.value.reblogs_count);
  const [reblogged, setReblogged] = useState(props.value.reblogged);

  useEffect(() => {
    async function fetchData() {
      reblogged ? setCount(props.value.reblogged ? count: count + 1) : setCount(props.value.reblogged ?  count - 1: count);
    }
    fetchData();
  }, [reblogged]);

  return (
    <>
      {reblogged ? (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {setReblogged(false);setUnreblog(props.value.id);}}
        >
          <TootIcon
            icon={"repeat-variant"}
            colour={"#19cf86"}
            value={count}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {setReblogged(true); setReblog(props.value.id);}}
        >
          <TootIcon
            icon={"repeat-variant"}
            value={count}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tootIconContainer: {flexDirection: "row"}
})