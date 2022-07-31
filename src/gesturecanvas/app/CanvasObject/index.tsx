import React from 'react'
import { View } from 'react-native'
import { ICanvasObject } from '../../lib/mst/CanvasObject'

interface ICanvasObjectProps {
  object: ICanvasObject
}

export const CanvasObject: React.VFC<ICanvasObjectProps> = ({ object }) => {
  return (
    <View style={{
      backgroundColor: 'black',
      height: object.height,
      position: 'absolute',
      start: object.x,
      top: object.y,
      width: object.width
    }} />
  )
}
