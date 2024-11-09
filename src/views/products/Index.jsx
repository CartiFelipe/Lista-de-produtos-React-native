import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView, Pressable, Button } from "react-native";
import Card from "../../components/productCard/Index";

const Index = ({ products, handleAdd }) => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.pageTitle}>Products</Text>
      </View>
      <View style={style.cardContainer}>
        {products &&
          products.map((product, index) => (
            <Card key={index} name={product.name} price={product.price} />
          ))}
      </View>

      <Button title="Add" onPress={handleAdd} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    gap: 20,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
});
export default Index;
