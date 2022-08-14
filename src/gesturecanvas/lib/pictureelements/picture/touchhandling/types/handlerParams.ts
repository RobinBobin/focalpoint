import { ITouchData } from "."
import { TCanvasObject as TCanvasObjectBase } from '../../../../mst/CanvasObject'

// Common params.
export type TCommonTouchHandlerParams<TCanvasObject extends TCanvasObjectBase> = {
  allTouches: ITouchData<TCanvasObject>[]
  changedTouches: ITouchData<TCanvasObject>[]
}

// onPressIn params.
export type TOnPressInParams<TCanvasObject extends TCanvasObjectBase> = TCommonTouchHandlerParams<TCanvasObject>

// onPressOut params.
export type TOnPressOutParamsExtra = {
  magicField: string
}

export type TOnPressOutParams<TCanvasObject extends TCanvasObjectBase> = TCommonTouchHandlerParams<TCanvasObject> & TOnPressOutParamsExtra
