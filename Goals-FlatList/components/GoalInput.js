import React, {useState} from "react";
import { Button, View, StyleSheet, TextInput } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputHandler = (enterdedText) => {
    setEnteredGoal(enterdedText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputContainer}
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" style={styles.container} onPress={props.onPressAdd.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalInput;
