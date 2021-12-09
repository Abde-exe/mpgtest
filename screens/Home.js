import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native"

import mpg from "../api/mpg"

const Home = ({ navigation }) => {
  useEffect(() => {
    //getChampsClubs()
  }, [])

  const getChampsClubs = async () => {
    const response = await mpg.get(
      "/championship-player-stats/mpg_championship_player_220160/summary"
    )
    console.log(`response`, response.data)
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "50%",
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("Clubs")}
        style={styles.button}
      >
        <Text style={styles.text}>Clubs</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Players", { id: null })}
        style={styles.button}
      >
        <Text style={styles.text}>Joueurs</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginRight: 5,
    marginVertical: 8,
    padding: 5,
  },
  text: {
    fontSize: 32,
  },
})
