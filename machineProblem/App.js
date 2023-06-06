import React from "react";
import { Image, Button, View, StyleSheet, Alert, SafeAreaView} from "react-native";


const App = () => {
  return (
    <><View style={styles.container}>
      <Image style={styles.tinyLogo} source={{uri: 'https://www.pngitem.com/pimgs/m/181-1814360_himouto-umaru-chan-himouto-umaru-chan-sticker-hd.png',}} />
    </View><SafeAreaView style={styles.container}>

        <View>
          <Button title="Register" color="#3CB371" style={styles.wtf} onPress={() => Alert.alert("Register button clicked!")} />
          <Button title="Login" color="#7C9D8E" style={styles.wtf} onPress={() => Alert.alert("Login button clicked!")} />
        </View>
      </SafeAreaView></>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wtf: {
    marginTop: 10,
    width: 80,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
export default App;