import { TCommonTouchHandlerParams, TOnPressInParams, TOnPressOutParams } from './handlerParams'
import { TCanvasObject as TCanvasObjectBase } from '../../../../mst/CanvasObject'

// Common options.
export type TCommonTouchHandlerOptions = {
  shouldRunOnJS?: boolean
  sortCanvasObjectsByOrderDesc?: boolean
}

export type TTouchHandler<
  TCanvasObject extends TCanvasObjectBase,
  TParams extends TCommonTouchHandlerParams<TCanvasObject>
> = (params: TParams) => void

type TTouchHandlerOptions<
  TCanvasObject extends TCanvasObjectBase,
  TParams extends TCommonTouchHandlerParams<TCanvasObject>
> = TCommonTouchHandlerOptions & {
  handler: TTouchHandler<TCanvasObject, TParams>
}

// onPressInOptions.
export type TOnPressInOptions<TCanvasObject extends TCanvasObjectBase> = TTouchHandlerOptions<TCanvasObject, TOnPressInParams<TCanvasObject>>

// onPressOutOptions.
export type TOnPressOutOptions<TCanvasObject extends TCanvasObjectBase> = TTouchHandlerOptions<TCanvasObject, TOnPressOutParams<TCanvasObject>>
