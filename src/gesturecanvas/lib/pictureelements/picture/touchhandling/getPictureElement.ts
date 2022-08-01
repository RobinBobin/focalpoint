import { TPictureElement } from './types'
import { ICanvasObject } from '../../../mst/CanvasObject'
import { IPosition } from '../../../mst/Position'

const isInside = (x: number, y: number, position: IPosition): boolean => {
  'worklet'

  return (
    x >= position.x && x <= position.x + position.width
    && y >= position.y && y <= position.y + position.height
  )
}

export const getPictureElement = <TCanvasObject extends ICanvasObject> (
  absoluteX: number,
  absoluteY: number,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: IPosition
): TPictureElement<TCanvasObject> => {
  'worklet'

  if (isInside(absoluteX, absoluteY, frozenCanvasPosition)) {
    return 'canvas'
  }

  return 'picturespace'
}
