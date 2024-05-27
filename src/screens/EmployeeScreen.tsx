// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Button, Alert } from 'react-native';
// import axios from 'axios';

// const EmployeeScreen = () => {
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
//         setEmployees(response.data.data);
//       } catch (error) {
//         setError('Failed to fetch employees');
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
//       setEmployees((prev) => prev.filter((employee) => employee.id !== id));
//     } catch (error) {
//       Alert.alert('Error', 'Failed to delete employee');
//     }
//   };

//   if (error) {
//     return (
//       <View>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <FlatList
//         data={employees}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.employee_name}</Text>
//             <Button title="Delete" onPress={() => deleteEmployee(item.id)} />
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default EmployeeScreen;
