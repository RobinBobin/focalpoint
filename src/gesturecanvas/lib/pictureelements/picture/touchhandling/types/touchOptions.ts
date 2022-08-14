import { TOnPressInOptions, TOnPressOutOptions } from './handlerOptions'
import { TCanvasObject as TCanvasObjectBase } from '../../../../mst/CanvasObject'

export interface ITouchOptions<TCanvasObject extends TCanvasObjectBase> {
  onPressIn?: TOnPressInOptions<TCanvasObject>
  onPressOut?: TOnPressOutOptions<TCanvasObject>
}
