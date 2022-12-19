import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fetchFollowers, fetchFollowings } from "../api/fetch";
import User from "../components/User";
import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export const FollowScreen = ({ route, navigation }) => {
  const { user, isFollower } = route.params;
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(0)

  useEffect(() => {
    async function fetchData(id) {
      setFollowers(await fetchFollowers(id));
      setFollowings(await fetchFollowings(id));
    }
    if(isLoaded == 0){
      fetchData(user.id);
      setIsLoaded(1);
    }
    
  }, [isLoaded]);
  
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Followers" component={Screen} initialParams={{users: followers}}/>
      <Tab.Screen name="Following" component={Screen} initialParams={{users: followings}} />
    </Tab.Navigator>
  );
};

const Screen = ({ route, navigation }) => {

  const { users } = route.params;

  return  <View style={styles.container}>
    {console.log('screen users', users)}
    <Text>Hi</Text>
  <ScrollView>
    
    {users.map((u) => (
      // <User data={u} />
      console.log("user", u)
    ))}
  </ScrollView>
</View>;
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
