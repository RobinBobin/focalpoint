import { TouchData } from 'react-native-gesture-handler'
import { TPictureElementName } from '../../../hooks/useMeasureInWindow'
import { ICanvasObject } from '../../../mst/CanvasObject'

export type TPictureElement<TCanvasObject extends ICanvasObject> = TCanvasObject | TPictureElementName

export interface ITouchData<
  TCanvasObject extends ICanvasObject
> extends Pick<TouchData, 'id' | 'absoluteX' | 'absoluteY'> {
  pictureElement: TPictureElement<TCanvasObject>
}
export interface IBaseTouchHandlerParams<TCanvasObject extends ICanvasObject> {
  allTouches: ITouchData<TCanvasObject>[]
  changedTouches: ITouchData<TCanvasObject>[]
}

export interface IBaseTouchHandlerOptions<
  TCanvasObject extends ICanvasObject,
  TTouchHandlerParams extends IBaseTouchHandlerParams<TCanvasObject>
> {
  handler: (params: TTouchHandlerParams) => void
  shouldRunOnJS?: boolean
}

export type TOnPressInOptions<TCanvasObject extends ICanvasObject> = IBaseTouchHandlerOptions<TCanvasObject, IBaseTouchHandlerParams<TCanvasObject>>

export interface ITouchOptions<TCanvasObject extends ICanvasObject> {
  onPressIn?: TOnPressInOptions<TCanvasObject>
}
