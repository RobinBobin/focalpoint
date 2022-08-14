import { GestureTouchEvent } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-reanimated'
import { mapTouches } from './mapTouches'
import {
  TOnPressInOptions,
  TOnPressOutOptions,
  TTouchHandler
} from './types/handlerOptions'
import { TCommonTouchHandlerParams, TOnPressOutParamsExtra } from './types/handlerParams'
import { TCanvasObject as TCanvasObjectBase } from '../../../mst/CanvasObject'
import { TPosition } from '../../../mst/Position'

type TTouchHandlerOptions<TCanvasObject extends TCanvasObjectBase> =
  TOnPressInOptions<TCanvasObject> |
  TOnPressOutOptions<TCanvasObject>

export function invokeHandler<TCanvasObject extends TCanvasObjectBase>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: TOnPressInOptions<TCanvasObject> | undefined
): void

export function invokeHandler<TCanvasObject extends TCanvasObjectBase>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: TOnPressOutOptions<TCanvasObject> | undefined,
  extraParametersGetter: () => TOnPressOutParamsExtra
): void

export function invokeHandler<
  TCanvasObject extends TCanvasObjectBase
>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: TTouchHandlerOptions<TCanvasObject> | undefined,
  extraParametersGetter?: () => {}
): void {
  'worklet'

  if (!options) {
    return
  }

  const handler = options.handler as TTouchHandler<TCanvasObject, TCommonTouchHandlerParams<TCanvasObject>>

  const [allTouches, changedTouches] = [event.allTouches, event.changedTouches].map(touches => mapTouches<TCanvasObject>(
      frozenCanvasObjects,
      frozenCanvasPosition,
      options.sortCanvasObjectsByOrderDesc ?? true,
      touches
    )
  )

  const commonParams = { allTouches, changedTouches }
  const params = { ...commonParams, ...extraParametersGetter?.() }

  options.shouldRunOnJS ?? true ? runOnJS(handler)(params) : handler(params)
}
