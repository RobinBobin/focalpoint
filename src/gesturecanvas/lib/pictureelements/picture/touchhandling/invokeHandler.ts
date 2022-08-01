import { runOnJS } from 'react-native-reanimated'
import { IBaseTouchHandlerOptions, IBaseTouchHandlerParams, ITouchOptions } from './types'
import { ICanvasObject } from '../../../mst/CanvasObject'

export const invokeHandler = <
  TCanvasObject extends ICanvasObject,
  TTouchHandlerParams extends IBaseTouchHandlerParams<TCanvasObject>
>(
  options: IBaseTouchHandlerOptions<TCanvasObject, TTouchHandlerParams> | undefined,
  params: TTouchHandlerParams
): void => {
  'worklet'

  const handler = options?.handler

  if (handler) {
    options.shouldRunOnJS ?? true ? runOnJS(handler)(params) : handler(params)
  }
}
