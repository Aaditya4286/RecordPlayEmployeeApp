// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const RecordingScreen = ({ navigation }) => {
//   const [recordings, setRecordings] = useState([]);

//   useEffect(() => {
//     const loadRecordings = async () => {
//       const storedRecordings = await AsyncStorage.getItem('recordings');
//       if (storedRecordings) {
//         setRecordings(JSON.parse(storedRecordings));
//       }
//     };

//     loadRecordings();
//   }, []);

//   const deleteRecording = async (index) => {
//     const newRecordings = [...recordings];
//     newRecordings.splice(index, 1);
//     setRecordings(newRecordings);
//     await AsyncStorage.setItem('recordings', JSON.stringify(newRecordings));
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Button title="Record" onPress={() => navigation.navigate('RECORD_SCREEN')} />
//       <FlatList
//         data={recordings}
//         renderItem={({ item, index }) => (
//           <View>
//             <Text>{item.title}</Text>
//             <TouchableOpacity onPress={() => deleteRecording(index)}>
//               <Text>Delete</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text>Play</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// export default RecordingScreen;
