import * as React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles'

const StartScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to GuideMeThrough!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('painettiin New User')
            navigation.navigate('newUser')
          }}>
          <Text>New user?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
  )
}

export default StartScreen

