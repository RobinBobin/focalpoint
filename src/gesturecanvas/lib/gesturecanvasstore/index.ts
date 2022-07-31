import { types } from 'mobx-state-tree'
import { IPosition, Position } from './Position'

const GestureCanvasStore = types.model('GestureCanvasStore', {
  canvasPositionInWindow: Position,
  pictureSpacePositionInWindow: Position
})
.views(self => ({
  get canvasPositionInPictureSpace(): IPosition {
    return {
      ...self.canvasPositionInWindow,
      x: self.canvasPositionInWindow.x - self.pictureSpacePositionInWindow.x,
      y: self.canvasPositionInWindow.y - self.pictureSpacePositionInWindow.y
    }
  }
}))
.actions(self => {
  const setCanvasPositionInWindow = (position: IPosition): void => {
    self.canvasPositionInWindow = position
  }

  const setPictureSpacePositionInWindow = (position: IPosition): void => {
    self.pictureSpacePositionInWindow = position
  }

  return {
    setCanvasPositionInWindow,
    setPictureSpacePositionInWindow
  }
})

export const gestureCanvasStore = GestureCanvasStore.create({
  canvasPositionInWindow: Position.create(),
  pictureSpacePositionInWindow: Position.create()
})
