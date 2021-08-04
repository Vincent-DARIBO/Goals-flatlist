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
  const [modalState, setModalState] = useState(false);

  const addGoal = (goalTitle) => {
    setcourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setModalState(false);
  };
  const removeGoalHandler = (goalId) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };
  const ModalStateHandler = () => {
    setModalState(true);
  };
  const cancelHandler = () => {
    setModalState(false);
  };
  return (
    <View style={styles.header}>
      <Button title="ADD NEW GOAL" onPress={ModalStateHandler} />
      <GoalInput
        visible={modalState}
        onPressAdd={addGoal}
        cancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
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
