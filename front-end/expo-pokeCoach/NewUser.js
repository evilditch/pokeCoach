import * as React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const categories = [
  { name: 'Mood, stress and anxiety', importance: 0 },
  { name: 'Sleep and recovery', importance: 0 },
  { name: 'Daily routines, chores and time management', importance: 0 },
  { name: 'Getting things done and concentration', importance: 0 },
  { name: 'Physical activity and exercise', importance: 0 },
  { name: 'Social life and relationships', importance: 0 },
  { name: 'Personal economy', importance: 0 }
]


const NewUser = () => {
  
  const [name, setName] = React.useState('')
  const [pronouns, setPronouns] = React.useState()
  
  const nameChanged = (name) => {
    console.log('name ' + name)
    setName(name)
  }
  
  const pronounsChanged = (pronouns) => {
    console.log('pronouns ' + pronouns)
    setPronouns(pronouns)
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen 
          name="screen1"
          options={{ title: 'Who are you?' }}>
        {(props) => <Screen1 {...props} name={name} nameChanged={nameChanged} pronounsChanged={pronounsChanged} pronouns={pronouns} />}
        </Stack.Screen>
        <Stack.Screen
          name="screen2"
        options={{ title: 'Where can we help you?'}} >
        {(props) => <Screen2 {...props} name={name} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Screen1 = ({ navigation, name, nameChanged, pronounsChanged, pronouns }) => {
  
  return (
    <View>
      <Text nativeId="name">What name do you want us to call you?</Text>
      <TextInput
        accessibilityLabel="name"
        accessibilityLabelledBy="name"
        onChangeText={(text) => nameChanged(text)} />
      <Text>What are your pronouns?</Text>
      <Picker
        selectedValue={pronouns}
        onValueChange={(itemValue, itemIndex) => 
          pronounsChanged(itemValue)}
      >
        <Picker.Item label="choose..." value="" />
        <Picker.Item label="she/her" value="she" />
        <Picker.Item label="he/him" value="he" />
        <Picker.Item label="they/them" value="they" />
      </Picker>
      <Button disabled={!name} title="Next" onPress={() => navigation.navigate('screen2')} />
    </View>
  )
}

const Screen2 = ({ navigation, name }) => {
  return (
    <View>
      <Text>Nice to meet you, { name }!</Text>
      <Text>Now, choose which areas you need help with</Text>
    { categories.map((category, index) => <Text key={index}>{category.name}</Text>)}
    </View>
  )
}

export default NewUser