import React from 'react'
import { StyleSheet, View } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.object} />
      <View style={styles.overlay} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    flex: 1
  },
  object: {
    backgroundColor: 'yellow',
    height: 300,
    start: 300,
    top: 250,
    width: 500
  },
  overlay: {
    backgroundColor: 'rgba(232, 232, 232, 0.8)',
    height: 700,
    start: 0,
    top: 0,
    position: 'absolute',
    width: 330
  }
})
