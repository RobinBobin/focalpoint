import { ComposedGesture, Gesture, GestureType } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-reanimated'
import { ITouchOptions } from './types'
import { ICanvasObject } from '../../../mst/CanvasObject'

export const useGesture = <TCanvasObject extends ICanvasObject> ({
  onPressIn
}: ITouchOptions<TCanvasObject>): ComposedGesture | GestureType => {
  return Gesture.Pan()
    .onTouchesCancelled(event => console.log('cancelled', event.changedTouches.map(t => t.id)))
    .onTouchesDown(event => {
      if (onPressIn?.handler) {
        if (onPressIn.shouldRunOnJS ?? true) {
          runOnJS(onPressIn.handler)({ event, pictureElement: 'canvas' })
        }
      }
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