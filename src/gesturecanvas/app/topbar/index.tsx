import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export const TopBar: React.VFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is TopBar</Text>
    </View>
  )
}
