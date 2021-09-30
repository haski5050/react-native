import React from 'react'
import { MainScreen, DirectScreen } from 'screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

type StackParamList = {
  Home: undefined
  Direct: {
    name: string
  }
}

const Stack = createStackNavigator<StackParamList>()

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Direct"
          component={DirectScreen}
          options={{ title: 'direct' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigate
