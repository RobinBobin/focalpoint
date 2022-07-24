import Constants from 'expo-constants'
import 'react-native-gesture-handler'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { PictureSpace } from './picturespace'
import styles from './styles'

export interface IPictureProps {
  style?: StyleProp<ViewStyle>
}

export const Picture: React.FC<IPictureProps> = ({ children, style }) => {
  const tap = Gesture.Tap()
    .onEnd(() => console.log('Hooray!'))

  return (
    <GestureHandlerRootView style={[styles.container, style]}>
      <GestureDetector gesture={tap}>
        <>
          <PictureSpace>{children}</PictureSpace>
          <View
            style={{
              backgroundColor: 'red',
              height: 20,
              position: 'absolute',
              start: 440 - 300,
              top: 315 - Constants.statusBarHeight - 20,
              width: 300
            }}
          />
        </>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}
