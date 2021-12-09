import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import getPosition from "../functions/position"

const PlayerDetailItem = ({ player, club }) => {
  const {
    firstName,
    lastName,
    ultraPosition,
    quotation,
    stats,
    clubId,
  } = player
  const { totalGoals, totalPlayedMatches, averageRating, matches } = stats
  const position = getPosition(ultraPosition)
  const { name, defaultJerseyUrl } = club
  return (
    <View
      style={{
        alignItem: "center",
        justifyContent: "center",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 20,
        padding: 10,
      }}
    >
      {firstName && <Text style={styles.title}>{`${firstName}`}</Text>}
      {lastName && <Text style={styles.title}>{lastName}</Text>}
      {club && (
        <Image
          source={{ uri: defaultJerseyUrl }}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
      )}
      <Text style={styles.subTitle}>{name["fr-FR"]}</Text>
      <Text style={styles.subTitle}>{position}</Text>
      <Text style={styles.text}>Cote : {quotation}</Text>
      <Text style={styles.text}>Matchs joués : {totalPlayedMatches}</Text>
      <Text style={styles.text}>Buts : {totalGoals}</Text>
      {
        <Text style={styles.text}>
          Note : {averageRating ? averageRating.toFixed(1) : "-"}
        </Text>
      }
    </View>
  )
}

export default PlayerDetailItem

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
