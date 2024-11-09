import { StyleSheet, SafeAreaView } from 'react-native';
import Card from "./src/components/productCard/Index.jsx";
import { StatusBar } from 'expo-status-bar';
import Main from "./src/views/main/Index.jsx"
import Products from "./src/views/products/Index.jsx"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Main />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd",
    marginTop: 30,
    padding: 20,

  },
});
