import React from "react"
import { View, Text } from "react-native"
import { Picker } from "@react-native-picker/picker"

const PositionPicker = ({ filter, onChange, setFilter }) => {
  return (
    <Picker
      selectedValue={filter}
      onValueChange={(itemValue, itemIndex) => {
        onChange(itemValue)
        setFilter(itemValue)
      }}
    >
      <Picker.Item label="Positions" value="0" />
      <Picker.Item label="Gardiens" value="10" />
      <Picker.Item label="Défenseurs" value="20" />
      <Picker.Item label="Latéraux" value="21" />
      <Picker.Item label="Milieux Défensifs" value="30" />
      <Picker.Item label="Milieux Offensifs" value="31" />
      <Picker.Item label="Attaquants" value="40" />
    </Picker>
  )
}

export default PositionPicker
