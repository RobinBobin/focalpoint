import { StyleSheet } from 'react-native'

export const BOTTOM_BAR_HEIGHT = 60

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: BOTTOM_BAR_HEIGHT,
    justifyContent: 'center'
  },
  header: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
