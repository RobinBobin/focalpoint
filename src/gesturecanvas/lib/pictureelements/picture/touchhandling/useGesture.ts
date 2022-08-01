import { toJS } from 'mobx'
import { ComposedGesture, Gesture, GestureType } from 'react-native-gesture-handler'
import { invokeHandler } from './invokeHandler'
import { mapTouches } from './mapTouches'
import { ITouchOptions } from './types'
import { ICanvasObject } from '../../../mst/CanvasObject'
import { positions } from '../../../mst/Positions'

export const useGesture = <TCanvasObject extends ICanvasObject> (
  canvasObjects: TCanvasObject[],
  {
    onPressIn
  }: ITouchOptions<TCanvasObject> = {}
): ComposedGesture | GestureType => {
  const frozenCanvasObjects = toJS(canvasObjects)
  const frozenCanvasPosition = toJS(positions.canvasRelativeToWindow)

  return Gesture.Pan()
    .onTouchesCancelled(event => console.log('cancelled', event.changedTouches.map(t => t.id)))
    .onTouchesDown(event => {
      const allTouches = mapTouches<TCanvasObject>(frozenCanvasObjects, frozenCanvasPosition, event.allTouches)
      const changedTouches = mapTouches<TCanvasObject>(frozenCanvasObjects, frozenCanvasPosition, event.changedTouches)

      invokeHandler(onPressIn, { allTouches, changedTouches })

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
    // .onTouchesUp(event  => {
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
    // })
}
