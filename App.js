import { StyleSheet, SafeAreaView } from 'react-native';
import Card from "./src/components/productCard/Index.jsx";
import { StatusBar } from 'expo-status-bar';
import Main from "./src/views/main/Index.jsx"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Card />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd",

  },
});
