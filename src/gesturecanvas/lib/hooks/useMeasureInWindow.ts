import { RefObject, useRef } from 'react'
import { View } from 'react-native'
import { positions } from '../mst/Positions'

interface IUseMeasureInWindowReturnType {
  onLayout: () => void
  ref: RefObject<View>
}

export type TPictureElementName = 'canvas' | 'picturespace'

export const useMeasureInWindow = (pictureElementName: TPictureElementName): IUseMeasureInWindowReturnType => {
  const ref = useRef<View>(null)

  const onLayout = (): void => {
    ref.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
      switch (pictureElementName) {
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
