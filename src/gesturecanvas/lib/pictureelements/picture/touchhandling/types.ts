import { TouchData } from 'react-native-gesture-handler'
import { TPictureElementName } from '../../../hooks/useMeasureInWindow'
import { ICanvasObject } from '../../../mst/CanvasObject'

export type TPictureElement<TCanvasObject extends ICanvasObject> = TCanvasObject[] | TPictureElementName

export interface ITouchData<TCanvasObject extends ICanvasObject> extends Pick<TouchData, 'id' | 'absoluteX' | 'absoluteY'> {
  pictureElement: TPictureElement<TCanvasObject>
}
export interface ICommonTouchHandlerParams<TCanvasObject extends ICanvasObject> {
  allTouches: ITouchData<TCanvasObject>[]
  changedTouches: ITouchData<TCanvasObject>[]
}

export interface ICommonTouchHandlerOptions<
  TCanvasObject extends ICanvasObject,
  TCustomTouchHandlerParams = {}
> {
  handler: (params: ICommonTouchHandlerParams<TCanvasObject> & TCustomTouchHandlerParams) => void
  shouldRunOnJS?: boolean
  sortCanvasObjectsByOrderDesc?: boolean
}

export interface ITouchOptions<TCanvasObject extends ICanvasObject> {
  onPressIn?: ICommonTouchHandlerOptions<TCanvasObject>
  onPressOut?: ICommonTouchHandlerOptions<TCanvasObject>
}
