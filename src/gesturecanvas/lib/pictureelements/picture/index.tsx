import { observer } from 'mobx-react-lite'
import 'react-native-gesture-handler'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { CanvasOuterSpaceOverlay } from './CanvasOuterSpaceOverlay'
import { useBackgroundColor } from './useBackgroundColor'
import styles from './styles'
import { ITouchOptions } from './touchhandling/types'
import { useGesture } from './touchhandling/useGesture'
import { PictureSpace } from '../picturespace'
import { useMeasureInWindow } from '../../hooks/useMeasureInWindow'
import { ICanvasObject } from '../../mst/CanvasObject'

export interface IPictureProps<TCanvasObject extends ICanvasObject> {
  canvasObjects: TCanvasObject[]
  canvasOuterSpaceOverlayOpacity?: number
  style?: StyleProp<ViewStyle>
  touchOptions: ITouchOptions<TCanvasObject>
}

const PictureRaw = <TCanvasObject extends ICanvasObject> ({
  canvasObjects,
  canvasOuterSpaceOverlayOpacity,
  children,
  style,
  touchOptions = {}
}: React.PropsWithChildren<IPictureProps<TCanvasObject>>): JSX.Element => {
  const { backgroundColor, resultingStyle } = useBackgroundColor(styles.rootContainer, style)
  const gesture = useGesture(touchOptions)
  const { onLayout, ref } = useMeasureInWindow('picturespace')

  return (
    <GestureHandlerRootView style={resultingStyle}>
      <GestureDetector gesture={gesture}>
        <View collapsable={false} onLayout={onLayout} ref={ref} style={styles.pictureSpaceContainer}>
          <PictureSpace>{children}</PictureSpace>
          <CanvasOuterSpaceOverlay backgroundColor={backgroundColor} opacity={canvasOuterSpaceOverlayOpacity} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export const Picture = observer(PictureRaw)
