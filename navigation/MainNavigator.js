import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Clubs from "../screens/Clubs"
import Home from "../screens/Home"
import PlayerDetail from "../screens/PlayerDetail"
import Players from "../screens/Players"

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Clubs" component={Clubs} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="PlayerDetail" component={PlayerDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
