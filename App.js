import { BlurView } from "expo-blur";
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
import { FAB } from "react-native-paper";
import NotificationScreen from "./screens/NotificationScreen";
import { StyleSheet } from "react-native";
import GenerateTootScreen from "./screens/GenerateTootScreen";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TimelineScreen } from "./screens/TimelineScreen";
import { FollowScreen } from "./screens/FollowScreen";
import { AuthenticationScreen } from "./screens/AuthenticationScreen";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <RecoilRoot>
      <RootSiblingParent>
        <NavigationContainer>
          <MainStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Main"
          >
            <MainStack.Screen
              name="Auth"
              component={AuthenticationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Generate Toot"
              component={GenerateTootScreen}
              options={({ navigation }) => ({
                headerShown: false,
                title: false,
                headerShadowVisible: false,
                headerLeft: () => (
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity
                    style={styles.tootButton}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Text style={styles.tootText}>Toot</Text>
                  </TouchableOpacity>
                ),
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
      <StatusBar style="dark" />
    </RecoilRoot>
  );
};

const TootNavigator = ({ route, navigation }) => {
  const { header, headerImage, title, component, additionalParams } =
    route.params;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={title}
        component={component}
        initialParams={additionalParams}
        options={{
          headerShown: header,
          headerShadowVisible: false,
          headerTitle: headerImage
        }}
      />
      <Stack.Screen
        name="Toot"
        component={TootScreen}
        options={{
          headerTitle: "Toot",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Trending"
        component={TimelineScreen}
        options={{ headerShown: true, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="Follow"
        component={FollowScreen}
        options={{
          headerTitle: "Follow",
          headerShown: true,
          headerShadowVisible: false 
        }}
      />
    </Stack.Navigator>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Timeline"
        tabBarOptions={{ showLabel: false }}
        screenOptions={{
          tabBarActiveTintColor: "black",
        }}
        options={{
          headerShown: true
        }}
      >
        <Tab.Screen
          name="Timeline"
          component={TootNavigator}
          initialParams={{
            header: true,
            title: "Timeline",
            component: HomeScreen,
            headerImage: () => (
              <Image
                style={{ width: 30, height: 30 }}
                source={require("./assets/logo.png")}
              />
            ),
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={25} color={color} />
            ),
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={TootNavigator}
          initialParams={{
            header: true,
            title: "Search",
            component: SearchScreen,
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" size={25} color={color} />
            ),
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={TootNavigator}
          initialParams={{
            header: true,
            title: "Notifications",
            component: NotificationScreen,
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="bell" size={25} color={color} />
            ),
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TootNavigator}
          initialParams={{
            header: false,
            title: "Profile",
            component: ProfileScreen,
            additionalParams: { isExternal: 0 },
          }}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user" size={25} color={color} />
              // <Avatar src={user.avatar} size={25}/>
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {
          navigation.push("Generate Toot");
        }}
        color="white"
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: "#6364ff",
  },
  cancelText: {
    color: "black",
    fontSize: 16,
  },
  cancelButton: {
    marginHorizontal: 20,
  },
  container: { paddingVertical: 10, paddingHorizontal: 15 },
  tootButton: {
    backgroundColor: "#6364ff",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tootText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
