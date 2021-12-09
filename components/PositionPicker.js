import React from "react"
import { View, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"

const PositionPicker = ({
  players,
  filter,
  setFilter,
  setlist,
  setfilteredPlayers,
  searchedPlayers,
}) => {
  const filtering = (position) => {
    let filteredList = []

    if (searchedPlayers.length == 0) {
      //no text search yet
      if (position == 0) {
        //no position filter
        setlist(players)
        setfilteredPlayers([])
      } else {
        //filtering by position
        filteredList = players.filter(
          (item) => item.ultraPosition.toString() == position
        )
        setlist(filteredList)
        setfilteredPlayers(filteredList)
      }
    } else {
      //list already filtered by name search
      if (position == 0) {
        //no position filter
        setlist(searchedPlayers)
        setfilteredPlayers([])
      } else {
        //filtering by position a list already filtered by name search
        filteredList = searchedPlayers.filter(
          (item) => item.ultraPosition.toString() == position
        )
        setlist(filteredList)
        setfilteredPlayers(
          players.filter((item) => item.ultraPosition.toString() == position)
        )
      }
    }
  }
  return (
    <View>
      <Picker
        selectedValue={filter}
        onValueChange={(itemValue, itemIndex) => {
          filtering(itemValue)
          setFilter(itemValue)
        }}
        style={styles.picker}
      >
        <Picker.Item label="Positions" value="0" />
        <Picker.Item label="Gardiens" value="10" />
        <Picker.Item label="Défenseurs" value="20" />
        <Picker.Item label="Latéraux" value="21" />
        <Picker.Item label="Milieux Défensifs" value="30" />
        <Picker.Item label="Milieux Offensifs" value="31" />
        <Picker.Item label="Attaquants" value="40" />
      </Picker>
    </View>
  )
}

export default PositionPicker

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "white",
    margin: 8,
    borderRadius: 20,
    width: "50%",
  },
})
