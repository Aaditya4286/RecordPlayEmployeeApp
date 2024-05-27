import React, { useState } from 'react';
import { View, TextInput, Button, Text, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AudioRecord from 'react-native-audio-record';

const RecordScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('red');
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    AudioRecord.start();
    setRecording(true);
  };

  const stopRecording = async () => {
    const audioFile = await AudioRecord.stop();
    setRecording(false);
    const newRecording = { title, color, audioFile };
    const storedRecordings = await AsyncStorage.getItem('recordings');
    const recordings = storedRecordings ? JSON.parse(storedRecordings) : [];
    recordings.push(newRecording);
    await AsyncStorage.setItem('recordings', JSON.stringify(recordings));
    navigation.navigate('Recording');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1 }}
      />
      <Picker
        selectedValue={color}
        onValueChange={(itemValue) => setColor(itemValue)}
      >
        <Picker.Item label="Red" value="red" />
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Green" value="green" />
      </Picker>
      {!recording ? (
        <Button title="Start Recording" onPress={startRecording} />
      ) : (
        <Button title="Stop Recording" onPress={stopRecording} />
      )}
    </View>
  );
};

export default RecordScreen;
