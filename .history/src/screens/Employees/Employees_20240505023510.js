import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
import NewEmployeeAdd from '../../components/system_admin/NewEmployeeAdd';

export default function Employees() {
    const [items] = React.useState([
        {
          key: 1,
          name: 'Cupcake',
          calories: 356,
          fat: 16,
        },
        {
          key: 2,
          name: 'Eclair',
          calories: 262,
          fat: 16,
        },
        {
          key: 3,
          name: 'Frozen yogurt',
          calories: 159,
          fat: 6,
        },
        {
          key: 4,
          name: 'Gingerbread',
          calories: 305,
          fat: 3.7,
        },
       ]);
  return (
    <View>
      <NewEmployeeAdd />
    <ScrollView horizontal={true} >
        <DataTable>
        <DataTable.Header>
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
        ))}
      </DataTable>
    </ScrollView>
    </View>
  )
}