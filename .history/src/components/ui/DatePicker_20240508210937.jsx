import React, { useEffect, useState } from 'react'
import { Button, View, Text } from 'react-native' // Import View and Text for displaying date and time
import DatePicker from 'react-native-date-picker'

export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Function to format the date
    const formatDate = (date) => {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    }

    // Function to format the time
    const formatTime = (date) => {
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    }
  }, [date])

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(newDate) => {
          setOpen(false)
          setDate(newDate)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      {/* Display Date and Time */}
      <View>
        <Text>Date: {formatDate(date)}</Text>
        <Text>Time: {formatTime(date)}</Text>
      </View>
    </>
  )
}
