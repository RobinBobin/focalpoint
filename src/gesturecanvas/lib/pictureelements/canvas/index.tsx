import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useMeasureInWindow } from '../hooks/useMeasureInWindow'

export interface ICanvasProps {
  style: StyleProp<ViewStyle>
}
export const Canvas: React.FC<ICanvasProps> = ({ style }) => {
  const { onLayout, ref } = useMeasureInWindow('canvas')

  return (
    <View onLayout={onLayout} ref={ref} style={style}>
      <View style={{
        backgroundColor: 'black',
        height: 100,
        position: 'absolute',
        start: -50,
        top: -20,
        width: 100
      }} />
      <View style={{
        backgroundColor: 'red',
        height: 100,
        position: 'absolute',
        start: 100,
        top: 100,
        width: 100
      }} />
      <View style={{
        backgroundColor: 'green',
        height: 100,
        position: 'absolute',
        start: 550,
        top: 200,
        width: 100
      }} />
    </View>
  )
}
