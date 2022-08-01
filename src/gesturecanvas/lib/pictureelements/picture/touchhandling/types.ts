import { GestureTouchEvent } from 'react-native-gesture-handler'
import { TPictureElementName } from '../../../hooks/useMeasureInWindow'
import { ICanvasObject } from '../../../mst/CanvasObject'

type TPictureElement<TCanvasObject extends ICanvasObject> = TCanvasObject | TPictureElementName

interface IBaseTouchHandlerParams<TCanvasObject extends ICanvasObject> {
  event: GestureTouchEvent
  pictureElement: TPictureElement<TCanvasObject>
}

interface IBaseTouchHandlerOptions<
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
