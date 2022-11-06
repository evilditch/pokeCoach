import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerStretched: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  item: {
    fontSize: 14,
    paddingTop: 12
  },
  inline: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 16,
    marginTop: 12
  },
  itemText: {
    fontSize: 20,
    padding: 24,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    padding: 20,
    textAlign: 'center'
  },
  textField: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginHorizontal: 36,
    paddingTop: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#A4C3B2",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 36,
    borderRadius: 10
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#609080',
    padding: 8
  },
  picker: {
    height: 50,
    width:150,
    alignSelf: 'center'
  },
})

export default styles