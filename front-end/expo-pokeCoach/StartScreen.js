import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StartScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text>Welcome to GuideMeThrough!</Text>
        <Button 
          title='New user?'
          onPress={() => {
            console.log('painettiin New User')
            navigation.navigate('newUser')
          }}
        />
        <Button title='Sign in' />
      </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
