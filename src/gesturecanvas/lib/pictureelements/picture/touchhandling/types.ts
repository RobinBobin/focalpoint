import { TouchData } from 'react-native-gesture-handler'
import { TPictureElementName } from '../../../hooks/useMeasureInWindow'
import { TCanvasObject as TCanvasObjectBase } from '../../../mst/CanvasObject'

export type TPictureElement<TCanvasObject extends TCanvasObjectBase> = TCanvasObject[] | TPictureElementName

export interface ITouchData<TCanvasObject extends TCanvasObjectBase> extends Pick<TouchData, 'id' | 'absoluteX' | 'absoluteY'> {
  pictureElement: TPictureElement<TCanvasObject>
}
export interface ICommonTouchHandlerParams<TCanvasObject extends TCanvasObjectBase> {
  allTouches: ITouchData<TCanvasObject>[]
  changedTouches: ITouchData<TCanvasObject>[]
}

export interface ICommonTouchHandlerOptions<
  TCanvasObject extends TCanvasObjectBase,
  TCustomTouchHandlerParams = {}
> {
  handler: (params: ICommonTouchHandlerParams<TCanvasObjectBase> & TCustomTouchHandlerParams) => void
  shouldRunOnJS?: boolean
  sortCanvasObjectsByOrderDesc?: boolean
}

export interface ITouchOptions<TCanvasObject extends TCanvasObjectBase> {
  onPressIn?: ICommonTouchHandlerOptions<TCanvasObject>
  onPressOut?: ICommonTouchHandlerOptions<TCanvasObject>
}
