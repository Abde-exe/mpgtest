import React, { useEffect, useState } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native"

import mpg from "../api/mpg"
import positionFunction from "../functions/position"
import PositionPicker from "../components/PositionPicker"

const Players = ({ navigation, route }) => {
  const [players, setplayers] = useState([])
  const [filteredPlayers, setfilteredPlayers] = useState([])
  const [searchedPlayers, setsearchedPlayers] = useState([])
  const [list, setlist] = useState([])
  const [filter, setfilter] = useState("")
  const clubId = route.params.id

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    const response = await mpg.get("/championship-players-pool/1")

    const jsonPlayers = response.data.poolPlayers
    let few = []
    clubId
      ? (few = jsonPlayers.filter((item) => item.clubId == clubId))
      : (few = jsonPlayers)

    setplayers(few)
    setlist(few)
  }
  const filtering = (position) => {
    let filteredList = []

    if (searchedPlayers.length == 0) {
      console.log("search = 0")

      //no text search yet
      if (position == 0) {
        console.log("search = 0 et pos = 0")

        //no position filter
        setlist(players)
        setfilteredPlayers([])
      } else {
        filteredList = players.filter(
          (item) => item.ultraPosition.toString() == position
        )
        setlist(filteredList)
        setfilteredPlayers(filteredList)
      }
    } else {
      //list already filtered by text search
      console.log("search != 0")

      if (position == 0) {
        console.log("search != 0 et pos = 0")

        //no position filter
        setlist(searchedPlayers)
        setfilteredPlayers([])
      } else {
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

  // console.log(`players[0]`, players[0])
  const renderPlayerItem = ({ item }) => {
    const position = positionFunction(item.ultraPosition)

    return (
      <Pressable
        style={styles.playerItem}
        onPress={() => navigation.navigate("PlayerDetail", { player: item })}
      >
        <View style={{ flexDirection: "row" }}>
          {item.firstName && <Text>{`${item.firstName} `}</Text>}
          {item.lastName && <Text>{item.lastName}</Text>}
        </View>
        <Text>{position}</Text>
      </Pressable>
    )
  }
  //console.log(`players`, players)
  return (
    <View style={{ flex: 1 }}>
      <TextInput onChangeText={searchByName} placeholder="Nom" />

      <PositionPicker
        filter={filter}
        setFilter={setfilter}
        onChange={filtering}
      />

      {players && <Text>nombre de players {list.length}</Text>}

      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderPlayerItem}
      />
    </View>
  )
}

export default Players

const styles = StyleSheet.create({
  playerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
})
