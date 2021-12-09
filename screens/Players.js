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
import SearchInput from "../components/SearchInput"

const Players = ({ navigation, route }) => {
  //initial list of all players fetched
  const [players, setplayers] = useState([])
  //filtered list by position
  const [filteredPlayers, setfilteredPlayers] = useState([])
  //filtered list by name search
  const [searchedPlayers, setsearchedPlayers] = useState([])
  //rendered list
  const [list, setlist] = useState([])
  //position filter
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
      <SearchInput
        players={players}
        setlist={setlist}
        filteredPlayers={filteredPlayers}
        setsearchedPlayers={setsearchedPlayers}
      />
      <PositionPicker
        players={players}
        filter={filter}
        setFilter={setfilter}
        setlist={setlist}
        setfilteredPlayers={setfilteredPlayers}
        searchedPlayers={searchedPlayers}
      />

      <View style={{ margin: 8, borderRadius: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderPlayerItem}
        />
      </View>
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
