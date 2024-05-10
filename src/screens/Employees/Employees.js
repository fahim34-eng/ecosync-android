import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import NewEmployeeAdd from '../../components/system_admin/NewEmployeeAdd';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINT } from '../../../GlobalVariables';
import tw from "twrnc";
import DeleteEmployee from '../../components/system_admin/DeleteEmployee';

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
      async function getEmployees() {
        const token = await AsyncStorage.getItem("token");
          if (!token) {
            ToastAndroid.show("You are unauthorized", ToastAndroid.SHORT);
            return;
          }
          const parsedToken = JSON.parse(token);
          const response = await fetch(`${ENDPOINT}/users`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + parsedToken.accessToken,
              "ngrok-skip-browser-warning": "69420"
            }
          });
          const data = await response.json();
          if (data.detail == "Token is invalid") {
            ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
          }
          else {
            setEmployees(data)
          }
      }
      getEmployees()
    }, [refresh])
  return (
    <View style={tw`py-4`}>
      <NewEmployeeAdd />
    <ScrollView horizontal={true} >
        <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{ width : 100}} >Employee ID</DataTable.Title>
          <DataTable.Title style={{ width : 150, textAlign : "center" }} >Name</DataTable.Title>
          <DataTable.Title style={{ width : 200}} >Status</DataTable.Title>
          <DataTable.Title style={{ width : 150}} >Contact Number</DataTable.Title>
          <DataTable.Title style={{ width : 100}} ></DataTable.Title>
          <DataTable.Title style={{ width : 100}} ></DataTable.Title>
          <DataTable.Title style={{ width : 100}} ></DataTable.Title>

        </DataTable.Header>

        {employees?.map((employee) => (
          <DataTable.Row key={employee.id}>
            <DataTable.Cell>{employee.id}</DataTable.Cell>
            <DataTable.Cell>{employee.name}</DataTable.Cell>
            <DataTable.Cell>{employee.role}</DataTable.Cell>
            <DataTable.Cell>{employee.phone}</DataTable.Cell>
            <DataTable.Cell><DeleteEmployee employee={employee} setRefresh={setRefresh} /></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell></DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
    </View>
  )
}