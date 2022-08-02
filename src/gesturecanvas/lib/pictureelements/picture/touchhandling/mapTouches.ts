import { TouchData } from 'react-native-gesture-handler'
import { ITouchData, TPictureElement } from './types'
import { TCanvasObject as TCanvasObjectBase } from '../../../mst/CanvasObject'
import { TPosition } from '../../../mst/Position'

const isInside = (x: number, y: number, position: TPosition): boolean => {
  'worklet'

  return (
    x >= position.x && x <= position.x + position.width
    && y >= position.y && y <= position.y + position.height
  )
}

export const mapTouches = <TCanvasObject extends TCanvasObjectBase> (
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  sortCanvasObjectsByOrderDesc: boolean,
  touches: TouchData[]
): ITouchData<TCanvasObject>[] => {
  'worklet'

  return touches.map(touch => {
    let pictureElement: TPictureElement<TCanvasObject> = 'picturespace'

    const touchedCanvasObjects = frozenCanvasObjects.filter(frozenCanvasObject => isInside(
      touch.absoluteX - frozenCanvasPosition.x,
      touch.absoluteY - frozenCanvasPosition.y,
      frozenCanvasObject
    ))

    if (touchedCanvasObjects.length) {
      pictureElement = touchedCanvasObjects
    } else if (isInside(touch.absoluteX, touch.absoluteY, frozenCanvasPosition)) {
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
