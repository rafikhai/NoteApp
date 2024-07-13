import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddNoteScreen = ({ route, navigation }) => {
  const { setNotes } = route.params;
  const [text, setText] = useState('');

  const addNote = () => {
    setNotes(prevNotes => [
      ...prevNotes,
      { id: Date.now().toString(), text }
    ]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Note" onPress={addNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddNoteScreen;
