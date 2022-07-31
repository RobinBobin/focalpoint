import { observer } from 'mobx-react-lite'
import 'react-native-gesture-handler'
import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { CanvasOuterSpaceOverlay } from './CanvasOuterSpaceOverlay'
import { getBackgroundColor } from './getBackgroundColor'
import styles from './styles'
import { PictureSpace } from '../picturespace'
import { useMeasureInWindow } from '../../hooks/useMeasureInWindow'
import { positions } from '../../mst/Positions'

export interface IPictureProps {
  canvasOuterSpaceOverlayOpacity?: number
  onTap: (canvasX: number, canvasY: number) => void
  style?: StyleProp<ViewStyle>
}

export const Picture: React.FC<IPictureProps> = observer(({
  canvasOuterSpaceOverlayOpacity,
  children,
  onTap,
  style
}) => {
  const { onLayout, ref } = useMeasureInWindow('picturespace')

  const tap = Gesture.Tap()
    .onEnd(event => {
      onTap(
        event.absoluteX - positions.canvasRelativeToWindow.x,
        event.absoluteY - positions.canvasRelativeToWindow.y)
    })

  const resultingStyle = StyleSheet.flatten([styles.rootContainer, style])
  const backgroundColor = getBackgroundColor(resultingStyle)

  return (
    <GestureHandlerRootView style={resultingStyle}>
      <GestureDetector gesture={tap}>
        <View onLayout={onLayout} ref={ref} style={styles.pictureSpaceContainer}>
          <PictureSpace>{children}</PictureSpace>
          <CanvasOuterSpaceOverlay backgroundColor={backgroundColor} opacity={canvasOuterSpaceOverlayOpacity} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
})
