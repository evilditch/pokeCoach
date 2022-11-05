import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from './StartScreen'
import NewUser from './NewUser'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen 
          name="start"
    component={StartScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="newUser"
          component={NewUser}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
