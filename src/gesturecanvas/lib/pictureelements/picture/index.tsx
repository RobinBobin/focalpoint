import 'react-native-gesture-handler'
import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { CanvasOuterSpaceOverlay } from './CanvasOuterSpaceOverlay'
import { getBackgroundColor } from './getBackgroundColor'
import styles from './styles'
import { PictureSpace } from '../picturespace'

export interface IPictureProps {
  canvasOuterSpaceOverlayOpacity?: number
  style?: StyleProp<ViewStyle>
}

export const Picture: React.FC<IPictureProps> = ({
  canvasOuterSpaceOverlayOpacity,
  children,
  style
}) => {
  const pan = Gesture.Pan()
    .maxPointers(1)
    .onUpdate(event => {
      console.log('Pan translationX', event.translationX)
    })

  const resultingStyle = StyleSheet.flatten([styles.container, style])
  const backgroundColor = getBackgroundColor(resultingStyle)

  return (
    <GestureHandlerRootView style={resultingStyle}>
      <GestureDetector gesture={pan}>
        <>
          <PictureSpace>{children}</PictureSpace>
          <CanvasOuterSpaceOverlay backgroundColor={backgroundColor} opacity={canvasOuterSpaceOverlayOpacity} />
        </>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}
