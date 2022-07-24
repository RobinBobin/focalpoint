import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    transform: [
      { scale: 0.5 },
      { translateX: 100 },
      // { translateY: 100 }
    ]
  }
})
