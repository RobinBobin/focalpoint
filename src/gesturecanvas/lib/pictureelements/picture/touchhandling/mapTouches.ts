import { TouchData } from 'react-native-gesture-handler'
import { ITouchData, TPictureElement } from './types'
import { ICanvasObject } from '../../../mst/CanvasObject'
import { IPosition } from '../../../mst/Position'

const isInside = (x: number, y: number, position: IPosition): boolean => {
  'worklet'

  return (
    x >= position.x && x <= position.x + position.width
    && y >= position.y && y <= position.y + position.height
  )
}

export const mapTouches = <TCanvasObject extends ICanvasObject> (
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: IPosition,
  touches: TouchData[]
): ITouchData<TCanvasObject>[] => {
  'worklet'

  return touches.map(touch => {
    let pictureElement: TPictureElement<TCanvasObject> = 'picturespace'

    if (isInside(touch.absoluteX, touch.absoluteY, frozenCanvasPosition)) {
      pictureElement = 'canvas'
    }

    return {
      absoluteX: touch.absoluteX,
      absoluteY: touch.absoluteY,
      id: touch.id,
      pictureElement
    }
  })
}
