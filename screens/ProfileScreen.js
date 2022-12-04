import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons"
import { useRecoilState } from "recoil";
import { userState } from "../api/atoms";
import { fetchProfile } from "../api/fetch";
import { useEffect } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {

  const [user, setUser] = useRecoilState(userState);


  useEffect(async () => {
    async function fetchData() {
    const res = await fetchProfile()
    setUser(res)
    }
    fetchData();
  }, [])
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header src={user.header}/>
        {console.log(user)}
        <View>
          <Text>{user.display_name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
