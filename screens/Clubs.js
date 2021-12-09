import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"

import mpg from "../api/mpg"
import ClubItem from "../components/ClubItem"

const Clubs = ({ navigation }) => {
  const [clubs, setclubs] = useState([])
  useEffect(() => {
    fetchClubs()
  }, [])

  const fetchClubs = async () => {
    const response = await mpg.get("/championship-clubs")
    const jsonClubs = response.data.championshipClubs
    //JSON to array
    const arrayClubs = Object.keys(jsonClubs).map((key) => {
      return jsonClubs[key]
    })
    setclubs(arrayClubs)
  }

  const renderClubItem = ({ item }) => {
    return <ClubItem item={item} navigation={navigation} />
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
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

const styles = StyleSheet.create({})
