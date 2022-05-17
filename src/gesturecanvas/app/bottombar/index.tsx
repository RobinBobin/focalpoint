import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export const BottomBar: React.VFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is BottomBar</Text>
    </View>
  )
}
