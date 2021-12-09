import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"

import PlayerDetailItem from "../components/PlayerDetailItem"
import getClub from "../functions/getClub"

const PlayerDetail = ({ route }) => {
  const [player, setplayer] = useState(route.params.player)
  const [club, setclub] = useState()

  const { stats, clubId } = player
  const { matches } = stats
  useEffect(() => {
    getClub(clubId).then(setclub)
  }, [])

  const renderMatchs = ({ item }) => {
    const { home, away, date, playerPerformance } = item

    return (
      <View>
        <Text>{`${home.clubId} ${home.score} VS ${away.score} ${away.clubId}`}</Text>
        <Text>{date}</Text>
        <Text>{playerPerformance.rating}</Text>
      </View>
    )
  }

  if (club) {
    return (
      <View style={{ flex: 1 }}>
        <PlayerDetailItem player={player} club={club} />
        <View>
          {/* {matches && (
            <FlatList
              data={matches}
              keyExtractor={(item) => item.matchId}
              renderItem={renderMatchs}
            />
          )} */}
        </View>
      </View>
    )
  } else {
    return <View></View>
  }
}

export default PlayerDetail

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "normal",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "200",
    textAlign: "center",
  },
})
