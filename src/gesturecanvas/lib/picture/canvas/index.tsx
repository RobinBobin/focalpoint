import React, { useEffect, useRef } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

export interface ICanvasProps {
  style: StyleProp<ViewStyle>
}
export const Canvas: React.FC<ICanvasProps> = ({ style }) => {
  const ref = useRef<View>(null)

  useEffect(() => {
    ref.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
      console.log('Canvas', x, y, width, height)
    })
  }, [])

  return (
    <View ref={ref} style={style}>
      <View style={{
        backgroundColor: 'black',
        height: 100,
        position: 'absolute',
        start: 0,
        top: 0,
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
