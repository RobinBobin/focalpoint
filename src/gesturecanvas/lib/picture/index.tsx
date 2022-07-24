import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import styles from './styles'

export interface IPictureProps {
  style?: StyleProp<ViewStyle>
}

export const Picture: React.FC<IPictureProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <>{children}</>
    </View>
  )
}
