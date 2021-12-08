import React, { useEffect, useState } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
} from "react-native"

import mpg from "../api/mpg"
const test = [
  {
    id: "mekzfm",
    name: {
      "fr-FR": "Man. United",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/2/1.png",
  },
  {
    id: "fzp",
    name: {
      "fr-FR": "Midtjylland",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2020/6/1000.png",
  },
  {
    id: "fzberbp",
    name: {
      "fr-FR": "Salernitana",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/5/1025.png",
  },
  {
    id: "fzberbp",
    name: {
      "fr-FR": "Caen",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/4/1028_v2.png",
  },
]
const Home = ({ navigation }) => {
  useEffect(() => {
  getChampsClubs()
  }, [])

 const getChampsClubs=async()=>{
 const response = await mpg.get("/championship-clubs")
 const test= response.data.championshipClubs["mpg_championship_club_1"]

    
       console.log(`response`, test)

  }
  return (
    <View>
      <Button title="Clubs" onPress={() => navigation.navigate("Clubs")} />
      <Button title="Players" onPress={() => navigation.navigate("Players",{id:null})} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  clubItem: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 95,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginRight: 5,
    marginVertical: 8,
    padding: 5,
  },
})
