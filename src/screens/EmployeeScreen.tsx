import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { AppText, BOLD, SIXTEEN, TouchableOpacityView } from '../common';
import FastImage from 'react-native-fast-image';
import { Delete2 } from '../helper/ImageAssets';
import { colors } from '../theme/colors';

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

  if (loading) return <AppText>Loading...</AppText>;
  if (error) return <AppText>Error: {error.message}</AppText>;

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.employeeCard}>
            <View style={styles.employeeDetails}>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name}>Employee ID   <AppText type={SIXTEEN} weight={BOLD} style={styles.name2}>{item.id}</AppText></AppText>
              <TouchableOpacityView onPress={() => deleteEmployee(item.id)}>
                <FastImage source={Delete2} resizeMode='contain' style={styles.image2} />
              </TouchableOpacityView>
            </View>

            <View style={styles.employeeDetails}>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name}>Employee Name</AppText>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name2}>{item.employee_name}</AppText>
            </View>

            <View style={styles.employeeDetails}>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name}>Employee Salary</AppText>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name2}>Salary: ${item.employee_salary}</AppText>
            </View>

            <View style={styles.employeeDetails}>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name}>Employee Age</AppText>
              <AppText type={SIXTEEN} weight={BOLD} style={styles.name2}>Age: {item.employee_age}</AppText>
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
    padding: 16,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  image2: {
    height: 32,
    width: 32,
  },
  name2: {
    color: colors.headerColor
  },
  employeeDetails: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  name: {
    color: colors.gray
  },
});

export default EmployeeScreen;
