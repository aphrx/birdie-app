import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fetchFollowers, fetchFollowings } from "../api/fetch";
import { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { auth } from "../api/set";

const LandingScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.landingContainer}>
        <Text style={styles.headerText}>
          See what's happening in the world right now.
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginScreen = ({ route, navigation }) => {

const [username, setUsername] = useState(null);
const [instance, setInstance] = useState(null);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.nextContainer}>
        <Text style={styles.headerText}>
          {"@" + (username?username:"username") + "@" + (instance?instance:"instance")}
        </Text>
        <TextInput 
            style={styles.textInput}
            value={username}
            placeholder={"@username"}
            onChangeText={(u) => setUsername(u)}
            autoCapitalize={false}
            autoFocus={true}/>
          <TextInput 
            style={styles.textInput}
            value={instance}
            placeholder={"@instance"}
            onChangeText={(i) => setInstance(i)}
            autoCapitalize={false}
            autoFocus={true}/>
        <TouchableOpacity style={styles.nextButton} onPress={() => auth(username, instance)}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    {/* </View> */}
    </KeyboardAvoidingView>
  );
};

export const AuthenticationScreen = ({ route, navigation }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./../assets/logo.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./../assets/logo.png")}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "HelveticaNeueBold",
    paddingHorizontal: 40,
    textAlign: "center",
  },
  landingContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 50,
    marginBottom: 100,
  },
  nextContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 50,
    marginBottom: 100,
  },
  loginButton: {
    backgroundColor: "#6364ff",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 50,
    width: 250,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  cancelText: {
    color: "black",
    fontSize: 16,
  },
  cancelButton: {
    marginHorizontal: 20,
  },
  nextText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#6364ff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    width: 100,
  },
  textInput: {
    borderColor: "#6364ff",
    color: "#6364ff",
    fontWeight: "500",
    borderWidth: 1,
    width: "80%",
    padding: 20,
    borderRadius: 50
  }
});
