import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import NewEmployeeAdd from '../../components/system_admin/NewEmployeeAdd';

export default function Employees() {
    const [employees, setEmployees] = useState([]);

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
          if (data.detail === "Unauthorized") {
            ToastAndroid.show("You are not authorized.", ToastAndroid.SHORT);
          }
          else {
            setEmployees(data)
          }
      }
      getStats()
    }, [])
  console.log(employees)
  return (
    <View>
      <NewEmployeeAdd />
    <ScrollView horizontal={true} >
        <DataTable>
        {/* <DataTable.Header>
          <DataTable.Title style={{ width : 100}} >Dessert</DataTable.Title>
          <DataTable.Title style={{ width : 100}} >Calories</DataTable.Title>
          <DataTable.Title style={{ width : 100}} >Fat</DataTable.Title>
          <DataTable.Title style={{ width : 100}} >Fat</DataTable.Title>
          <DataTable.Title style={{ width : 100}} >Fat</DataTable.Title>
          <DataTable.Title style={{ width : 100}} >Fat</DataTable.Title>

        </DataTable.Header>

        {items.map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
          </DataTable.Row>
        ))} */}
      </DataTable>
    </ScrollView>
    </View>
  )
}