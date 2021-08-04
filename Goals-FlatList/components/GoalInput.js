import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputHandler = (enterdedText) => {
    setEnteredGoal(enterdedText);
  };
  const addGoalHandler = () => {
    props.onPressAdd(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal anitmationTYpe="fade" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={inputHandler}
          value={enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttonscontainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.cancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonscontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  button: {
    width: "40%",
    borderRadius: 5
  },
});

export default GoalInput;
