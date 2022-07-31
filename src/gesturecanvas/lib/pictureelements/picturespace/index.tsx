import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { useMeasureInWindow } from '../hooks/useMeasureInWindow'

export const PictureSpace: React.FC = ({ children }) => {
  const { onLayout, ref } = useMeasureInWindow('picturespace')

  return (
    <View onLayout={onLayout} ref={ref} style={styles.staticContainer}>
      <View style={styles.animatedContainer}>
        <>{children}</>
      </View>
    </View>
  )
}
