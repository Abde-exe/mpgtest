import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Club from "../screens/Club"
import Home from "../screens/Home"
import PlayerDetail from "../screens/PlayerDetail"

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Club" component={Club} />
        <Stack.Screen name="PlayerDetail" component={PlayerDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
