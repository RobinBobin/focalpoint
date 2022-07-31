import { RefObject, useRef } from 'react'
import { View } from 'react-native'
import { gestureCanvasStore } from '../../gesturecanvasstore'

export interface IUseMeasureInWindowReturnType {
  onLayout: () => void
  ref: RefObject<View>
}

export type TObjectName = 'canvas' | 'picturespace'

export const useMeasureInWindow = (objectName: TObjectName): IUseMeasureInWindowReturnType => {
  const ref = useRef<View>(null)

  const onLayout = (): void => {
    ref.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
      let method

      switch (objectName) {
        case 'canvas':
          method = gestureCanvasStore.setCanvasPositionInWindow
          break

        case 'picturespace':
          method = gestureCanvasStore.setPictureSpacePositionInWindow
          break
      }

      method({ x, y, width, height })
    })
  }

  return { onLayout, ref}
}
