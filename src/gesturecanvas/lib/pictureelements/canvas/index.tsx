import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useMeasureInWindow } from '../../hooks/useMeasureInWindow'

export interface ICanvasProps {
  style: StyleProp<ViewStyle>
}
export const Canvas: React.FC<ICanvasProps> = ({ children, style }) => {
  const { onLayout, ref } = useMeasureInWindow('canvas')

  return (
    <View onLayout={onLayout} ref={ref} style={style}><>{children}</></View>
  )
}
