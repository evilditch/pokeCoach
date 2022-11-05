import * as React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

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
        {(props) => <Screen1 {...props} nameChanged={nameChanged} pronounsChanged={pronounsChanged} pronouns={pronouns} />}
        </Stack.Screen>
        <Stack.Screen
          name="screen2"
        options={{ title: 'Where we can help you?'}} >
        {() => <Screen2 name={name} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Screen1 = ({ navigation, nameChanged, pronounsChanged, pronouns }) => {
  
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
          <Button title="Next" onPress={() => navigation.navigate('screen2')} />
    </View>
  )
}

const Screen2 = ({ navigation, name }) => {
  return (
    <View>
      <Text>Nice to meet you, { name }!</Text>
      <Text>Now, choose which areas you need help</Text>
    </View>
  )
}

export default NewUser