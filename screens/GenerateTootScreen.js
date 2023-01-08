import { Text, View, StyleSheet } from "react-native";
import Toot from "../components/Toot";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native";
import { useState } from "react";
import Avatar from "../components/Avatar";
import { TouchableOpacity } from "react-native";
import { postToot } from "../api/set";

const GenerateTootScreen = ({ navigation }) => {
  const [toot, setToot] = useState(null);
  

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
      <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
      <TouchableOpacity
                    style={styles.tootButton}
                    onPress={() => {
                      postToot(toot);
                      navigation.goBack();
                    }}
                  >
                    <Text style={styles.tootText}>Toot</Text>
                  </TouchableOpacity>
      </View>
      <View style={styles.tootRow}>
        <Avatar
          style={styles.tootAvatar}
          user={{
            avatar_static:
              "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-1/68248668_2810042445692430_262622883484794880_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=CkpqoT1YQxcAX878nzz&_nc_ht=scontent-ord5-1.xx&oh=00_AfDnMk86IKrYf1KsBkDsaDaxDNaFeinmaMI7xXhMJQDYpQ&oe=63C21E87",
          }}
        />

        <View style={styles.tootColumn}>
          <View style={styles.publicStatus}>
            <Text style={styles.publicText}>Public</Text>
          </View>
          <View style={styles.tootContainer}>
            <TextInput
              style={styles.tootField}
              value={toot}
              placeholder={"What's happening?"}
              onChangeText={(text) => setToot(text)}
              autoFocus={true}
              multiline={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tootField: {
    marginHorizontal: 5,
    marginTop: 10,
    fontSize: 18,
  },
  tootRow: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  tootAvatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 5,
    margin: 0,
  },
  publicStatus: {
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "#6364ff",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
    width: 70,
    alignItems: "center",
  },
  publicText: {
    color: "#6364ff",
    fontSize: 10,
  },
  tootColumn: {
    flexDirection: "column",
  },
  tootContainer: {
    flex: 0,
    marginRight: 40
  },
  cancelText: {
    color: "black",
    fontSize: 16,
  },
  cancelButton: {
    marginHorizontal: 20,
  },
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
  headerRow: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

export default GenerateTootScreen;
