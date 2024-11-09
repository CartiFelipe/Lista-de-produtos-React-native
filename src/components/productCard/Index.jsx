import { StyleSheet, Text, View } from "react-native";

const Index = ({ name = "null", price = "10" }) => {
  return (
    <View style={style.cardContainer}>
      <Text style={style.text}>Name: {name}</Text>
      <Text style={style.text}>Price: {price}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "column",

    padding: 10,
    borderBlockColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,

    padding: 5,
  },
});
export default Index;
