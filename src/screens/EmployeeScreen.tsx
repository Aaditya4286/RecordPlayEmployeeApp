// screens/EmployeeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const EmployeeScreen = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        setEmployees(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (err) {
      Alert.alert('Error', 'Failed to delete employee');
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.employeeCard}>
            <Image
              source={{ uri: item.profile_image || 'https://via.placeholder.com/150' }}
              style={styles.profileImage}
            />
            <View style={styles.employeeDetails}>
              <Text style={styles.name}>{item.employee_name}</Text>
              <Text>Salary: ${item.employee_salary}</Text>
              <Text>Age: {item.employee_age}</Text>
              <Button title="Delete" onPress={() => deleteEmployee(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  employeeCard: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  employeeDetails: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EmployeeScreen;
