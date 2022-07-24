import Constants from 'expo-constants'
import { observer } from 'mobx-react-lite'
import 'react-native-gesture-handler'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import styles from './styles'
import { PictureSpace } from '../picturespace'
import { canvasStore } from '../../canvasstore'

export interface IPictureProps {
  style?: StyleProp<ViewStyle>
}

export const Picture: React.FC<IPictureProps> = observer(({ children, style }) => {
  const pan = Gesture.Pan()
    .maxPointers(1)
    .onUpdate(event => {
      console.log('Pan translationX', event.translationX)
    })
  
  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <GestureDetector gesture={pan}>
        <>
          <PictureSpace>{children}</PictureSpace>
          <View
            style={{
              backgroundColor: '#343e3ecc',
              height: canvasStore.positionInWindow.height,
              position: 'absolute',
              start: 0,
              top: canvasStore.positionInWindow.y - Constants.statusBarHeight,
              width: canvasStore.positionInWindow.x
            }}
          />
        </>
      </GestureDetector>
    </GestureHandlerRootView>
  )
})
