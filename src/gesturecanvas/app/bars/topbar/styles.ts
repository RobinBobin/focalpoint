import { StyleSheet } from 'react-native'

export const TOP_BAR_HEIGHT = 60

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'darkblue',
    height: TOP_BAR_HEIGHT,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  header: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
