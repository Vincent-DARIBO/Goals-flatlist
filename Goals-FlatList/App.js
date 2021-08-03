import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const inputHandler = (enterdedText) => {
    setEnteredGoal(enterdedText);
  };
  const addGoal = () => {
    setcourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputContainer}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" style={styles.container} onPress={addGoal} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});
