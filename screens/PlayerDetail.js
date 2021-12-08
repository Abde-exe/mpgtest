import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"
import mpg from "../api/mpg"
import positionFunction from "../functions/position"

const PlayerDetail = ({ route }) => {
  const [player, setplayer] = useState(route.params.player)
  const [jersey, setjersey] = useState()
  const [position, setposition] = useState("")
  const [club, setclub] = useState()
  const { firstName, lastName, ultraPosition, quotation, stats,clubId } = player
  const { totalGoals, totalPlayedMatches, averageRating, matches } = stats

  useEffect(() => {
    setposition(positionFunction(ultraPosition))
    getChampsClubs(clubId)
  }, [])
  
 const getChampsClubs=async(id)=>{
 const response = await mpg.get("/championship-clubs")
 const test= response.data.championshipClubs[id]

    
       setclub(test)

  }
  // const fetchJersey = async () => {
  //   const response = await mpg.get("/championship-clubs", {
  //     params: { id: "mpg_championship_club_429" },
  //   })
  //   console.log(`response`, response.data)
  //   setjersey(response.data.defaultJerseyUrl)
  // }
  // const fetchPlayer = async () => {
  //   const response = await mpg.get(
  //     `/championship-player-stats/${playerId}/summary`
  //   )
  //   console.log(`response`, response.data.statsSeasons)
  //   setplayer(response.data.statsSeasons[0])
  // }
  //console.log(`player`, player)
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

    if(club){
      return(

    <View style={{ flex: 1 }}>
      <View style={{alignItem:'center',justifyContent:'center',backgroundColor:'white',margin: 10,borderRadius:20,padding:10}}>
        {firstName && <Text style={styles.title}>{`${firstName}`}</Text>}
       {lastName && <Text style={styles.title}>{lastName}</Text>}
      {club&&  <Image source={{uri:club.defaultJerseyUrl}} style={{width:100,height:100,alignSelf:'center'}}/>}
        <Text style={styles.subTitle}>{club.shortName}</Text>
        <Text style={styles.subTitle}>{position}</Text>
        <Text style={styles.text}>Cote : {quotation}</Text>
        <Text style={styles.text}>Matchs joués : {totalPlayedMatches}</Text>
        <Text style={styles.text}>Buts : {totalGoals}</Text>
       { <Text style={styles.text}>Note : {averageRating ?averageRating.toFixed(1): '-'}</Text>}
      </View>
      <View>
        {/* {matches && (
          <FlatList
            data={matches}
            keyExtractor={(item) => item.matchId}
            renderItem={renderMatchs}
          />
        )} */}
      </View>
    </View>)}
    else{
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
