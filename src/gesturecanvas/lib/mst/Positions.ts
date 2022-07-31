import { types } from 'mobx-state-tree'
import { IPosition, Position } from './Position'

const Positions = types.model('Positions', {
  canvasRelativeToWindow: Position,
  pictureSpaceRelativeToWindow: Position
})
.views(self => ({
  get canvasRelativeToPictureSpace(): IPosition {
    return {
      ...self.canvasRelativeToWindow,
      x: self.canvasRelativeToWindow.x - self.pictureSpaceRelativeToWindow.x,
      y: self.canvasRelativeToWindow.y - self.pictureSpaceRelativeToWindow.y
    }
  }
}))

export const positions = Positions.create({
  canvasRelativeToWindow: Position.create(),
  pictureSpaceRelativeToWindow: Position.create()
})
