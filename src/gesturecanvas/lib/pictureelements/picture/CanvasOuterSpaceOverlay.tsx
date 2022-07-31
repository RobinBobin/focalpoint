import { observer } from 'mobx-react-lite'
import React from 'react'
import { ColorValue, View } from 'react-native'
import { positions } from '../../mst/Positions'

export interface ICanvasOuterSpaceOverlayProps {
  backgroundColor: ColorValue
  opacity?: number
}

export const CanvasOuterSpaceOverlay: React.VFC<ICanvasOuterSpaceOverlayProps> = observer(({ backgroundColor, opacity = 0.8 }) => {
  const {
    canvasRelativeToPictureSpace,
    pictureSpaceRelativeToWindow
  } = positions

  const canvasEnd = canvasRelativeToPictureSpace.x + canvasRelativeToPictureSpace.width

  const bottom = {
    bottom: 0,
    start: canvasRelativeToPictureSpace.x,
    top: canvasRelativeToPictureSpace.y + canvasRelativeToPictureSpace.height,
    width: canvasRelativeToPictureSpace.width
  }

  const commonStyle = {
    backgroundColor,
    opacity,
    position: 'absolute' as const
  }

  const end = {
    end: 0,
    height: pictureSpaceRelativeToWindow.height,
    start: canvasEnd,
    top: 0,
  }

  const start = {
    height: pictureSpaceRelativeToWindow.height,
    start: 0,
    top: 0,
    width: canvasRelativeToPictureSpace.x
  }

  const top = {
    height: canvasRelativeToPictureSpace.y,
    start: canvasRelativeToPictureSpace.x,
    top: 0,
    width: canvasRelativeToPictureSpace.width
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
