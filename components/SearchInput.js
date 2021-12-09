import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const SearchInput = ({
  players,
  setlist,
  filteredPlayers,
  setsearchedPlayers,
}) => {
  const searchByName = (name) => {
    let filteredList = []
    if (filteredPlayers.length == 0) {
      //no position filter yet
      if (name == "") {
        //no text search
        setlist(players)
        setsearchedPlayers([])
      } else {
        filteredList = players.filter(
          (item) =>
            item.lastName.startsWith(name) ||
            (item.firstName && item.firstName.startsWith(name))
        )
        setlist(filteredList)
        setsearchedPlayers(filteredList)
      }
    } else {
      //list already filtered by position
      if (name == "") {
        //no text search
        setlist(filteredPlayers)
      } else {
        filteredList = filteredPlayers.filter(
          (item) =>
            item.lastName.startsWith(name) ||
            (item.firstName && item.firstName.startsWith(name))
        )
        setlist(filteredList)
        setsearchedPlayers(
          players.filter(
            (item) =>
              item.lastName.startsWith(name) ||
              (item.firstName && item.firstName.startsWith(name))
          )
        )
      }
    }
  }
  return (
    <View>
      <TextInput
        onChangeText={searchByName}
        placeholder="Rechercher un joueur"
        style={styles.input}
        placeholderTextColor={"lightgrey"}
      />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 8,
    padding: 8,
    borderRadius: 20,
    height: 70,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
})
