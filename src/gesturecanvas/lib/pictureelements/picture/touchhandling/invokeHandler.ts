import { GestureTouchEvent } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-reanimated'
import { mapTouches } from './mapTouches'
import { ICommonTouchHandlerOptions, ICommonTouchHandlerParams } from './types'
import { TCanvasObject as TCanvasObjectBase } from '../../../mst/CanvasObject'
import { TPosition } from '../../../mst/Position'

// https://stackoverflow.com/questions/52318011/optional-parameters-based-on-conditional-types

export function invokeHandler<
  TCanvasObject extends TCanvasObjectBase
>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: ICommonTouchHandlerOptions<TCanvasObject> | undefined
): void

export function invokeHandler<
  TCanvasObject extends TCanvasObjectBase,
  TCustomTouchHandlerParams
>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: ICommonTouchHandlerOptions<TCanvasObject, TCustomTouchHandlerParams> | undefined,
  paramsGetter: () => TCustomTouchHandlerParams
): void

export function invokeHandler<
  TCanvasObject extends TCanvasObjectBase,
  TCustomTouchHandlerParams
>(
  event: GestureTouchEvent,
  frozenCanvasObjects: TCanvasObject[],
  frozenCanvasPosition: TPosition,
  options: ICommonTouchHandlerOptions<TCanvasObject, TCustomTouchHandlerParams> | undefined,
  paramsGetter?: () => TCustomTouchHandlerParams
): void {
  'worklet'

  const handler = options?.handler

  if (!handler) {
    return
  }

  const sortCanvasObjectsByOrderDesc = options.sortCanvasObjectsByOrderDesc ?? true

  const allTouches = mapTouches<TCanvasObject>(
    frozenCanvasObjects,
    frozenCanvasPosition,
    sortCanvasObjectsByOrderDesc,
    event.allTouches
  )

  const changedTouches = mapTouches<TCanvasObject>(
    frozenCanvasObjects,
    frozenCanvasPosition,
    sortCanvasObjectsByOrderDesc,
    event.changedTouches
  )

  // FIXME: remove as
  const params = { ...paramsGetter?.(), allTouches, changedTouches } as ICommonTouchHandlerParams<TCanvasObject> & TCustomTouchHandlerParams

  options.shouldRunOnJS ?? true ? runOnJS(handler)(params) : handler(params)
}
