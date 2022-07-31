import { RefObject, useRef } from 'react'
import { View } from 'react-native'
import { positions } from '../mst/Positions'

export interface IUseMeasureInWindowReturnType {
  onLayout: () => void
  ref: RefObject<View>
}

export type TObjectName = 'canvas' | 'picturespace'

export const useMeasureInWindow = (objectName: TObjectName): IUseMeasureInWindowReturnType => {
  const ref = useRef<View>(null)

  const onLayout = (): void => {
    ref.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
      const position = { x, y, width, height }

      switch (objectName) {
        case 'canvas':
          positions.canvasRelativeToWindow.set(height, width, x, y)
          break

        case 'picturespace':
          positions.pictureSpaceRelativeToWindow.set(height, width, x, y)
          break
      }
    })
  }

  return { onLayout, ref}
}
