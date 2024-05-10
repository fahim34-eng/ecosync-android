import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectMapOption({ topic, setTopic }) {
  const topics = [
    { value: "recycling", label: "Nearby Recycling Facilities" },
    { value: "drop_off_point", label: "Drop-Off Points" },
    { value: "waste_management_center", label: "Waste Management Centers" },
  ];

  const handleTopicChange = (value) => {
    setTopic(value);
  };

  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginHorizontal : 10}}>
      <DropDownPicker
        value={topic}
        items={topics}
        setOpen={setOpen}
        open={open}
        setValue={handleTopicChange}
        style={{ zIndex: 1000, marginBottom: 10, marginTop: 10 }}
        placeholder="Select Topic"
        placeholderStyle={{ color: "#808080" }}
      />
    </View>
  );
}
