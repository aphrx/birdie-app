import { StatusBar } from "expo-status-bar";
import { View, Image, TouchableOpacity } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { RecoilRoot, useRecoilState } from "recoil";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import "react-native-gesture-handler";
import SearchScreen from "./screens/SearchScreen";
import TootScreen from "./screens/TootScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./screens/ProfileScreen";
import { useEffect } from "react";
import { fetchProfile } from "./api/fetch";
import { userState } from "./api/atoms";
import NotificationScreen from "./screens/NotificationScreen";
import { SearchBar } from 'react-native-elements';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {




  return (
    <RecoilRoot>
      
      <RootSiblingParent>
        <View style={{ flex: 1, backgroundColor: "#000" }}>
          <StatusBar backgroundColor="black" barStyle="light-content"/>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
              name="Main"
                component={MainScreen}
                options={{ headerShown: false}}
              />
              <Stack.Screen 
                name="Toot"
                component={TootScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </RootSiblingParent>
    </RecoilRoot>
  );
};

const MainScreen = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(async () => {
    async function fetchData() {
    const res = await fetchProfile()
    setUser(res)
    }
    fetchData();
  }, [])

  return <Tab.Navigator
  initialRouteName="Home"
  tabBarOptions={{ showLabel: false }}
  screenOptions={{
    tabBarActiveTintColor: 'black',
  }}
>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="home" size={25} color={color} />
      ),
      headerTitle: () => (
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/logo.png")}
        />
      ),
      // headerLeft: (props) => 
      // <TouchableOpacity onClick={() => navigator.na}>
      //   <FontAwesome5 name="user" size={25}/>
      //   </TouchableOpacity>
    }}
  />
  <Tab.Screen
    name="Search"
    component={SearchScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="search" size={25} color={color} />
      ),
    
    }}
  />
  <Tab.Screen
    name="Notifications"
    component={NotificationScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="bell" size={25} color={color} />
      ),
    }}
  />
  {/* <Tab.Screen
    name="Messages"
    component={SearchScreen}
    options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="envelope" size={25} color={color} />
      ),
    }}
  /> */}
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    initialParams={{user: user}}
    options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="user" size={25} color={color} />
        // <Avatar src={user.avatar} size={25}/>
      ),
      headerTitle: user.display_name,
      headerShown: false
    }}
  />
  </Tab.Navigator>
}

export default App;
