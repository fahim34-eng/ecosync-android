import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';

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
    <ScrollView>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>

      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
    </ScrollView>
  )
}