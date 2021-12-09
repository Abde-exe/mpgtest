import React from "react"
import { Pressable, StyleSheet, Text, Image } from "react-native"

const ClubItem = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.clubItem}
      // onPress={() => navigation.navigate("Players", { id: item.id })}
    >
      <Image
        source={{
          uri: item.defaultJerseyUrl,
        }}
        style={{ height: "80%", width: "80%" }}
      />
      <Text style={styles.text}>{item.name["fr-FR"]}</Text>
    </Pressable>
  )
}

export default ClubItem

const styles = StyleSheet.create({
  clubItem: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 95,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginVertical: 8,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 10,
  },
})
