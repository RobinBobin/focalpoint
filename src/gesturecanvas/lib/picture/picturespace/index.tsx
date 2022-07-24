import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import styles from './styles'

export const PictureSpace: React.FC = ({ children }) => {
  const ref = useRef<View>(null)

  useEffect(() => {
    ref.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
      console.log('PictureSpace', x, y, width, height)
    })
  }, [])

  return (
    <View ref={ref} style={styles.container}>
      <>{children}</>
    </View>
  )
}
