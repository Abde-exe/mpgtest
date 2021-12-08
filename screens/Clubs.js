import React, { useEffect, useState } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native"

import mpg from "../api/mpg"
const test = [
  {
    id: "mpg_championship_club_149",
    name: {
      "fr-FR": "Man. United",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/2/1.png",
  },
  {
    id: "mpg_championship_club_862",
    name: {
      "fr-FR": "Midtjylland",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2020/6/1000.png",
  },
  {
    id: "mpg_championship_club_154",
    name: {
      "fr-FR": "Salernitana",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/5/1025.png",
  },
  {
    id: "mpg_championship_club_1",
    name: {
      "fr-FR": "Caen",
    },
    defaultJerseyUrl:
      "https://s3-eu-west-1.amazonaws.com/image.mpg/jersey/2021/4/1028_v2.png",
  },
]
const Clubs = ({ navigation }) => {
  const [clubs, setclubs] = useState([])
    useEffect(() => {
      fetchClubs()
    }, [])

    const fetchClubs = async () => {
      const response = await mpg.get("/championship-clubs")

      const jsonClubs = response.data.championshipClubs
      const arrayClubs = Object.keys(jsonClubs).map((key) => {
        return jsonClubs[key]
      })
      // console.log(`response`, arrayClubs.length)
      const few = arrayClubs.slice(0, 4)
      setclubs(arrayClubs)
    }
  const renderClubItem = ({ item }) => {
    return (
      <Pressable
        style={styles.clubItem}
        onPress={() => navigation.navigate("Players",{id:item.id})}
      >
        <Image
          source={{
            uri: item.defaultJerseyUrl,
          }}
          style={{ height: "80%", width: "80%" }}
        />
        <Text>{item.name["fr-FR"]}</Text>
      </Pressable>
    )
  }
  //console.log(`clubs`, clubs)
  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      {clubs.length>0? <Text>nombre de clubs {clubs.shortName}</Text>:null}

      <FlatList
        numColumns={4}
        keyExtractor={(item) => item.id}
        data={clubs}
        renderItem={renderClubItem}
      />
    </View>
  )
}

export default Clubs

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
