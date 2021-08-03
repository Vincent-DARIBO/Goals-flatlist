import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});
export default GoalItem;
