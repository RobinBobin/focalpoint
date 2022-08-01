import { toJS } from 'mobx'
import { ComposedGesture, Gesture, GestureType } from 'react-native-gesture-handler'
import { getPictureElement } from './getPictureElement'
import { invokeHandler } from './invokeHandler'
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
  const frozenPictureSpacePosition = toJS(positions.pictureSpaceRelativeToWindow)

  return Gesture.Pan()
    .onTouchesCancelled(event => console.log('cancelled', event.changedTouches.map(t => t.id)))
    .onTouchesDown(event => {
      event.changedTouches.forEach(changedTouch => {
        const pictureElement = getPictureElement(
          changedTouch.absoluteX,
          changedTouch.absoluteY,
          frozenCanvasObjects,
          frozenCanvasPosition
        )

        invokeHandler(onPressIn, { id: changedTouch.id, pictureElement })
      })

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
