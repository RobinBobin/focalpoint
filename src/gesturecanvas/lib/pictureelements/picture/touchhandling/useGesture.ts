import { toJS } from 'mobx'
import { ComposedGesture, Gesture, GestureType } from 'react-native-gesture-handler'
import { invokeHandler } from './invokeHandler'
import { ITouchOptions } from './types'
import { TCanvasObject as TCanvasObjectBase } from '../../../mst/CanvasObject'
import { positions } from '../../../mst/Positions'

export const useGesture = <TCanvasObject extends TCanvasObjectBase> (
  canvasObjects: TCanvasObject[],
  {
    onPressIn,
    onPressOut
  }: ITouchOptions<TCanvasObject> = {}
): ComposedGesture | GestureType => {
  const frozenCanvasObjects = toJS(canvasObjects)
  const frozenCanvasPosition = toJS(positions.canvasRelativeToWindow)

  return Gesture.Pan()
    .onTouchesCancelled(event => console.log('cancelled', event.changedTouches.map(t => t.id)))
    .onTouchesDown(event => {
      invokeHandler(event, frozenCanvasObjects, frozenCanvasPosition, onPressIn)

      // switch (event.allTouches.length) {
      //   case 1:
      //     console.log('pan')
      //     break

      //   case 2:
      //     console.log('pinch')
      //     break

      //   default:
      //     console.log('no!!!')
      //     break
      // }
    })
    // .onTouchesMove(event => {
    //   switch (event.allTouches.length) {
    //     case 1:
    //       console.log('pan')
    //       break

    //     case 2:
    //       console.log('pinch')
    //       break

    //     default:
    //       console.log('too many')
    //       break
    //   }
    // })
    .onTouchesUp(event  => {
      invokeHandler(event, frozenCanvasObjects, frozenCanvasPosition, onPressOut)
    //   switch (event.allTouches.length) {
    //     case 1:
    //       console.log('zero')
    //       break

    //     case 2:
    //       console.log('pan')
    //       break

    //     default:
    //       console.log("can't be so")
    //       break
    //   }
    })
}
