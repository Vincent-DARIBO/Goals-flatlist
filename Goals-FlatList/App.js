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

import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoal = goalTitle => {
    setcourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.header}>
      <GoalInput onPressAdd={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 50,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
