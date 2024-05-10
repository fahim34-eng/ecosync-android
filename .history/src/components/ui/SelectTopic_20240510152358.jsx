import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export function SelectTopic({ topic, setTopic }) {
  const topics = [
    { label: "Littering", value: "Littering" },
    { label: "Overflowing Bins", value: "Overflowing Bins" },
    { label: "Illegal Dumping", value: "Illegal Dumping" },
    { label: "Hazardous Waste Mismanagement", value: "Hazardous Waste Mismanagement" },
    { label: "Odor Issues", value: "Odor Issues" },
    { label: "Pest Infestation", value: "Pest Infestation" },
    { label: "Environmental Pollution", value: "Environmental Pollution" },
    { label: "Health and Safety Hazards", value: "Health and Safety Hazards" }
  ];

  const handleTopicChange = (value) => {
    setTopic(value);
  };

  const [open, setOpen] = useState(false);

  return (
    <View>
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
