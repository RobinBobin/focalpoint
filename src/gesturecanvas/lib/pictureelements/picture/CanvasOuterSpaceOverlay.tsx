import { observer } from 'mobx-react-lite'
import React from 'react'
import { ColorValue, View } from 'react-native'
import { gestureCanvasStore } from '../../gesturecanvasstore'

export interface ICanvasOuterSpaceOverlayProps {
  backgroundColor: ColorValue
  opacity?: number
}

export const CanvasOuterSpaceOverlay: React.VFC<ICanvasOuterSpaceOverlayProps> = observer(({ backgroundColor, opacity = 0.8 }) => {
  const {
    canvasPositionInPictureSpace,
    pictureSpacePositionInWindow
  } = gestureCanvasStore

  const canvasEnd = canvasPositionInPictureSpace.x + canvasPositionInPictureSpace.width

  const bottom = {
    bottom: 0,
    start: canvasPositionInPictureSpace.x,
    top: canvasPositionInPictureSpace.y + canvasPositionInPictureSpace.height,
    width: canvasPositionInPictureSpace.width
  }

  const commonStyle = {
    backgroundColor,
    opacity,
    position: 'absolute' as const
  }

  const end = {
    end: 0,
    height: pictureSpacePositionInWindow.height,
    start: canvasEnd,
    top: 0,
  }

  const start = {
    height: pictureSpacePositionInWindow.height,
    start: 0,
    top: 0,
    width: canvasPositionInPictureSpace.x
  }

  const top = {
    height: canvasPositionInPictureSpace.y,
    start: canvasPositionInPictureSpace.x,
    top: 0,
    width: canvasPositionInPictureSpace.width
  }

  return (
    <>
      <View style={[commonStyle, bottom]} />
      <View style={[commonStyle, end]} />
      <View style={[commonStyle, start]} />
      <View style={[commonStyle, top]} />
    </>
  )
})
