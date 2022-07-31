import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export const PictureSpace: React.FC = ({ children }) => {
  return (
    <View style={styles.animatedContainer}><>{children}</></View>
  )
}
