import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { CanvasObject } from '../../mst/CanvasObject'
import { objects } from '../../mst/CanvasObjects'

export const TopBar: React.VFC = () => {
  const onPress = (): void => {
    objects.push(CanvasObject.create({
      field2: 'mandatory',
      height: 100,
      id: `id_${Date.now()}`,
      width: 100,
      x: -20,
      y: -20
    }))
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.header}>This is TopBar</Text>
    </TouchableOpacity>
  )
}
